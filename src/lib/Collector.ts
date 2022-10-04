import { Collection, List } from '@excilone/collection';
import type {
	AnyChannel,
	AnyThreadChannel,
	AutocompleteInteraction,
	Client,
	ClientEvents,
	CommandInteraction,
	ComponentInteraction,
	Constants,
	Message,
	PingInteraction,
	PossiblyUncachedGuild,
	PossiblyUncachedMessage,
	PossiblyUncachedTextableChannel,
	TextableChannel,
	UnknownInteraction
} from 'eris';
import { loadImport, loadProperty } from '../loaders';
import type {
	CollectorClientEvents,
	CollectorClientValues,
	CollectorData,
	CollectorOptions,
	CollectorRequired
} from '../typings';
import { checkType, CollectorEvents, isTextableChannel } from '../utils';

// if MESSAGE_COMPONENT is changed
const MESSAGE_COMPONENT_TYPE: Constants['InteractionTypes']['MESSAGE_COMPONENT'] = 3;

class Collector<E extends keyof CollectorClientEvents> implements CollectorData<E> {
	event: E;
	idle: boolean;
	max?: number;
	timeout?: number;
	collected: Collection<string, CollectorClientEvents[E][0]> = new Collection();
	data: CollectorRequired;
	ended = false;
	received = 0;
	onEnd?(
		reason: string,
		collected: Map<string, ClientEvents[E][0]>
	): unknown | Promise<unknown>;
	onRun?(...args: CollectorClientEvents[E]): unknown | Promise<unknown>;
	filter?(...args: CollectorClientEvents[E]): boolean | Promise<boolean>;
	private _timer?: NodeJS.Timeout;
	private _maxReceived: boolean;
	constructor(data: CollectorData<E>) {
		this.event = checkType(data.event, 'STRING', {
			enum: CollectorEvents
		}) as E;
		this.idle = typeof data.idle === 'boolean' ? data.idle : false;
		this.max =
			data.max !== undefined
				? checkType(data.max, 'NUMBER', {
						min: 1,
						integer: true
				  })
				: undefined;
		this.timeout =
			data.timeout !== undefined ? checkType(data.timeout, 'NUMBER') : undefined;
		this.data = data.data;
		this.filter = typeof data.filter === 'function' ? data.filter : undefined;
		this.onEnd = typeof data.onEnd === 'function' ? data.onEnd : undefined;
		this.onRun = typeof data.onRun === 'function' ? data.onRun : undefined;
		this._maxReceived = typeof data.maxReceived === 'boolean' ? data.maxReceived : false;
	}
	async run(...args: ClientEvents[E]): Promise<void> {
		if (this.ended)
			return this.data.client.collectors.removeCollector(this) as unknown as void;
		const cancel = await this.cancelRun(args[0]);
		if (cancel) {
			this.collect(...(args as CollectorClientEvents[E]));
			if (this.onRun !== undefined) this.onRun(...(args as CollectorClientEvents[E]));
			if (this.idle) this.resetTimeout();

			this.checkEnd();
		}
	}
	async cancelRun(value: CollectorClientValues): Promise<boolean> {
		if (this.event === 'interactionCreate') {
			const interaction = value as ComponentInteraction;
			return (
				interaction.type === MESSAGE_COMPONENT_TYPE &&
				interaction.channel.id === this.data.channelID &&
				(this.data.guildID !== undefined
					? this.data.guildID === interaction.guildID
					: true) &&
				interaction.message.id === this.data.messageID &&
				(await (this.filter ?? (() => true))(
					...([interaction] as unknown as CollectorClientEvents[E])
				))
			);
		}

		const message = value as Message<PossiblyUncachedTextableChannel>;
		return (
			message.channel.id === this.data.channelID &&
			(this.data.guildID !== undefined ? this.data.guildID === message.guildID : true) &&
			(await (this.filter ?? (() => true))(
				...([message] as unknown as CollectorClientEvents[E])
			))
		);
	}
	start() {
		this.ended = false;
		this.resetTimeout();
		this.data.client.collectors.addCollector(this);
		return this;
	}
	collect(...args: CollectorClientEvents[E]) {
		const [value] = args;
		this.received++;
		this.collected.set(value.id, value);

		return value.id;
	}
	end(reason = 'not-provided') {
		this.clearTimeout();
		this.data.client.collectors.removeCollector(this);
		if (this.ended) return;
		this.ended = true;
		if (this.onEnd !== undefined) return this.onEnd(reason, this.collected);
	}
	clearTimeout() {
		if (this._timer !== undefined) clearTimeout(this._timer);
	}
	resetTimeout() {
		this.clearTimeout();
		if (this.timeout !== undefined)
			this._timer = setTimeout(() => this.end('timeout'), this.timeout);
	}
	reset() {
		this.end('reset');
		this.collected = new Collection();
		this.received = 0;
		this.start();
	}
	get endReason(): string | undefined {
		if (
			this.max !== undefined &&
			(this._maxReceived ? this.received : this.collected.size) >= this.max
		)
			return 'limit';
		return undefined;
	}
	checkEnd(): boolean {
		const reason = this.endReason;
		if (reason !== undefined) this.end(reason);
		return reason !== undefined;
	}
}

class CollectorManager {
	list: List<Collector<keyof CollectorClientEvents>> = new List();
	client: Client;
	constructor(client: Client) {
		this.client = client;
		this.client.on('messageCreate', this._onMessageCreate.bind(this));
		this.client.on('interactionCreate', this._onInteractionCreate.bind(this));
		this.client.on('channelDelete', this._onChannelDelete.bind(this));
		this.client.on('threadDelete', this._onThreadDelete.bind(this));
		this.client.on('guildDelete', this._onGuildDelete.bind(this));
		this.client.on('messageDelete', this._onMessageDelete.bind(this));
		this.client.on('messageDeleteBulk', this._onMessageDeleteBulk.bind(this));
		this.client.on('messageUpdate', this._onMessageUpdate.bind(this));
	}
	addCollector(collector: Collector<keyof CollectorClientEvents>) {
		return this.list.add(collector);
	}
	removeCollector(collector: Collector<keyof CollectorClientEvents>) {
		return this.list.delete(collector);
	}
	private _onMessageCreate(message: Message<PossiblyUncachedTextableChannel>) {
		for (const collector of this.list.values()) {
			if (collector.event === 'messageCreate') {
				if (collector.ended) return this.removeCollector(collector);
				void collector.run(message);
			}
		}
	}
	private _onInteractionCreate(
		interaction:
			| PingInteraction
			| CommandInteraction
			| ComponentInteraction
			| AutocompleteInteraction
			| UnknownInteraction
	) {
		for (const collector of this.list.values()) {
			if (collector.event === 'interactionCreate') {
				if (collector.ended) return this.removeCollector(collector);
				void collector.run(interaction);
			}
		}
	}
	private _onChannelDelete(channel: AnyChannel) {
		for (const collector of this.list.values()) {
			if (collector.data.channelID === channel.id) collector.end('channel-deleted');
		}
	}
	private _onThreadDelete(channel: AnyThreadChannel) {
		for (const collector of this.list.values()) {
			if (collector.data.channelID === channel.id) collector.end('thread-deleted');
		}
	}
	private _onGuildDelete(guild: PossiblyUncachedGuild) {
		for (const collector of this.list.values()) {
			if (collector.data.guildID !== undefined && collector.data.guildID === guild.id)
				collector.end('guild-deleted');
		}
	}
	private _onMessageDelete(message: PossiblyUncachedMessage) {
		for (const collector of this.list.values()) {
			if (collector.data.messageID === message.id) collector.end('message-deleted');
			else if (collector.collected.has(message.id))
				collector.collected.delete(message.id);
		}
	}
	private _onMessageDeleteBulk(messages: PossiblyUncachedMessage[]) {
		for (const message of messages.values()) this._onMessageDelete(message);
	}
	private _onMessageUpdate(message: Message<PossiblyUncachedTextableChannel>) {
		for (const collector of this.list.values()) {
			if (collector.event === 'messageCreate' && collector.collected.has(message.id))
				collector.collected.set(message.id, message);
		}
	}
}

export = (Eris: typeof import('eris')) => {
	loadProperty(
		Eris,
		'Client',
		function collectors(this: Client) {
			return new CollectorManager(this);
		},
		true
	);
	loadImport(Eris, CollectorManager);
	loadImport(Eris, Collector);

	/* Message Collector */
	function createMessageCollector(
		this: TextableChannel,
		options?: CollectorOptions<'messageCreate'>
	) {
		if (typeof options !== 'object') options = {};
		return new Collector({
			event: 'messageCreate',
			data: {
				channelID: this.id,
				guildID: 'guild' in this ? this.guild.id : undefined,
				client: this.client
			},
			...options
		}).start();
	}
	loadProperty(Eris, 'PrivateChannel', createMessageCollector);
	loadProperty(Eris, 'TextChannel', createMessageCollector);
	loadProperty(Eris, 'ThreadChannel', createMessageCollector);
	loadProperty(Eris, 'TextVoiceChannel', createMessageCollector);
	loadProperty(
		Eris,
		'Client',
		function createChannelMessageCollector(
			this: Client,
			channelID: string,
			options?: CollectorOptions<'messageCreate'>
		) {
			if (typeof options !== 'object') options = {};
			const channel = this.getChannel(channelID);
			if (isTextableChannel(channel)) {
				return new Collector({
					event: 'messageCreate',
					data: {
						channelID: channelID,
						guildID: 'guild' in channel ? channel.guild.id : undefined,
						client: this
					},
					...options
				}).start();
			}
			throw new Error(`The channel with ID: "${channelID}" is invalid.`);
		}
	);

	/* Component Collector */
	loadProperty(
		Eris,
		'Message',
		function createComponentCollector(
			this: Message<PossiblyUncachedTextableChannel>,
			options?: CollectorOptions<'interactionCreate'>
		) {
			if (typeof options !== 'object') options = {};
			return new Collector({
				data: {
					channelID: this.channel.id,
					client: (this as unknown as { _client: Client })._client,
					guildID: this.guildID,
					messageID: this.id
				},
				event: 'interactionCreate',
				...options
			}).start();
		}
	);
};
