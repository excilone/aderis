import type { Collection as ExciloneCollection, List } from '@excilone/collection';
import 'eris';

declare module 'eris' {
	/* Embed */
	export class MessageEmbed implements EmbedOptions {
		constructor(data?: EmbedOptions);
		author?: EmbedAuthorOptions;
		color?: number;
		description?: string;
		fields?: EmbedField[];
		footer?: EmbedFooterOptions;
		image?: EmbedImageOptions;
		thumbnail?: EmbedImageOptions;
		timestamp?: string | Date;
		title?: string;
		url?: string;
		/**
		 * Sets the title of the embed
		 * @param title The new title of the embed
		 */
		setTitle(title: string): this;
		/**
		 * Sets the description of the embed
		 * @param description The new description of the embed
		 */
		setDescription(description: string): this;
		/**
		 * Sets the title URL of the embed
		 * @param url The new URL of the title
		 */
		setURL(url: string): this;
		/**
		 * Sets the timestamp of the embed
		 * @param stringDate A string representation of a date. [See](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
		 * @example
		 * embed.setTimestamp('Jul 9, 2016');
		 */
		setTimestamp(stringDate: string): this;
		/**
		 * Sets the timestamp of the embed
		 * @param unixTimestamp The new timestamp
		 * @example
		 * embed.setTimestamp(Date.now());
		 */
		setTimestamp(unixTimestamp: number): this;
		/**
		 * Sets the timestamp of the embed
		 * @param date The new timestamp of the embed
		 */
		setTimestamp(date: Date): this;
		/**
		 * Sets the color of the embed
		 * @param hex A hexadecimal number
		 * @example
		 * embed.setColor(0xFFFFFF);
		 */
		setColor(hex: number): this;
		/**
		 * Sets the color of the embed with an rgb representation
		 * @example
		 * embed.setColor(234, 26, 20);
		 */
		setColor(r: number, g: number, b: number): this;
		/**
		 * Sets the embed color to a random color
		 */
		setColor(random: 'RANDOM'): this;
		/**
		 * Sets the color of the embed
		 * @example
		 * embed.setColor('#FFFFFF')
		 */
		setColor(hexString: `#${string}`): this;
		/**
		 * Sets the footer of the embed
		 * @param text The text of the footer
		 * @param iconURL The URL of the new footer icon
		 */
		setFooter(text: string, iconURL?: string): this;
		setFooter(footer: EmbedFooterOptions): this;
		setImage(url: string): this;
		setImage(image: EmbedImageOptions): this;
		setThumbnail(url: string): this;
		setThumbnail(thumbnail: EmbedImageOptions): this;
		setAuthor(author: EmbedAuthorOptions): this;
		/**
		 * Sets the author of the embed
		 * @param name The name of the author
		 * @param iconURL The url of the author icon
		 * @param url The url of the author
		 */
		setAuthor(name: string, iconURL?: string, url?: string): this;
		setFields(fields: EmbedField[]): this;
		addField(field: EmbedField): this;
		addField(name: string, value: string, inline?: boolean): this;
		addFields(...fields: EmbedField[] | EmbedField[][]): this;
		toJSON(): EmbedOptions;
		static MAX_TITLE_LENGTH: number;
		static MAX_DESCRIPTION_LENGTH: number;
		static MAX_FIELD_NAME_LENGTH: number;
		static MAX_FIELD_VALUE_LENGTH: number;
		static MAX_FIELDS_LENGTH: number;
		static MAX_FOOTER_TEXT_LENGTH: number;
		static MAX_AUTHOR_NAME_LENGTH: number;
	}

	/* Collector */
	export class Collector<E extends keyof CollectorClientEvents> implements CollectorData<E> {
		constructor(data: CollectorData<E>);
		event: E;
		idle: boolean;
		max?: number;
		timeout?: number;
		collected: ExciloneCollection<string, CollectorClientEvents[E][0]>;
		data: E extends 'interactionCreate' ? CollectorRequired : BaseCollectorRequired;
		ended: boolean;
		received: number;
		filter?(...args: CollectorClientEvents[E]): boolean | Promise<boolean>;
		onEnd?(
			reason: string,
			collected: ExciloneCollection<string, CollectorClientEvents[E][0]>
		): unknown | Promise<unknown>;
		onRun?(...args: CollectorClientEvents[E]): unknown | Promise<unknown>;
		run(...args: ClientEvents[E]): Promise<void>;
		cancelRun(value: ClientEvents[E][0]): Promise<boolean>;
		start(): this;
		collect(...args: CollectorClientEvents[E]): string;
		end(reason?: string): unknown | Promise<unknown>;
		clearTimeout(): void;
		resetTimeout(): void;
		reset(): void;
		get endReason(): string | undefined;
		checkEnd(): boolean;
	}
	export class CollectorManager {
		list: List<Collector<keyof CollectorClientEvents>>;
		client: Client;
		constructor(client: Client);
		addCollector(collector: Collector<keyof CollectorClientEvents>): this['list'];
		removeCollector(collector: Collector<keyof CollectorClientEvents>): boolean;
	}
	export interface CollectorClientEvents {
		messageCreate: ClientEvents['messageCreate'];
		interactionCreate: [interaction: ComponentInteraction];
	}
	export interface BaseCollectorRequired {
		client: Client;
		channelID: string;
		guildID?: string;
	}
	export interface CollectorRequired extends BaseCollectorRequired {
		messageID: string;
	}
	export interface CollectorOptions<E extends keyof CollectorClientEvents> {
		maxReceived?: boolean;
		filter?(...args: CollectorClientEvents[E]): boolean | Promise<boolean>;
		onRun?(...args: CollectorClientEvents[E]): unknown | Promise<unknown>;
		onEnd?(
			reason: string,
			collected: ExciloneCollection<string, CollectorClientEvents[E][0]>
		): unknown | Promise<unknown>;
		timeout?: number;
		idle?: boolean;
		max?: number;
	}
	export interface CollectorData<E extends keyof CollectorClientEvents>
		extends CollectorOptions<E> {
		event: E;
		data: E extends 'interactionCreate' ? CollectorRequired : BaseCollectorRequired;
	}

	/* Collector Implementations */
	export interface Client {
		collectors: CollectorManager;
		createChannelMessageCollector(
			channelID: string,
			options?: CollectorOptions<'messageCreate'>
		): Collector<'messageCreate'>;
	}
	export interface Textable {
		createMessageCollector(
			options?: CollectorOptions<'messageCreate'>
		): Collector<'messageCreate'>;
	}
	export interface GuildTextable {
		createMessageCollector(
			options?: CollectorOptions<'messageCreate'>
		): Collector<'messageCreate'>;
	}
	export interface TextChannel {
		createMessageCollector(
			options?: CollectorOptions<'messageCreate'>
		): Collector<'messageCreate'>;
	}
	export interface PrivateChannel {
		createMessageCollector(
			options?: CollectorOptions<'messageCreate'>
		): Collector<'messageCreate'>;
	}
	export interface ThreadChannel {
		createMessageCollector(
			options?: CollectorOptions<'messageCreate'>
		): Collector<'messageCreate'>;
	}
	export interface TextVoiceChannel {
		createMessageCollector(
			options?: CollectorOptions<'messageCreate'>
		): Collector<'messageCreate'>;
	}
	export interface Message {
		createComponentCollector(
			options?: CollectorOptions<'interactionCreate'>
		): Collector<'interactionCreate'>;
	}

	/* CommandInteraction Implementations */
	export type InteractionContentEphemeral = Omit<InteractionContent, 'flags'>;

	/* Member */
	export interface Member {
		roleCollection: Collection<Role>;
		highestRole: Role;
		roleColor?: Role;
		displayName: string;
		/**
		 * Send a message to the member
		 */
		send(
			content: MessageContent,
			file?: FileContent | FileContent[]
		): Promise<Message<PrivateChannel>>;
	}

	/* Role */
	export interface Role {
		hexColor: string;
	}

	/* User */
	export interface User {
		/**
		 * Send a message to the user
		 */
		send(
			content: MessageContent,
			file?: FileContent | FileContent[]
		): Promise<Message<PrivateChannel>>;
		tag: string;
	}

	/* CommandInteraction */
	export interface CommandInteraction {
		deferEphemeral(): Promise<void>;
		createEphemeralFollowup(
			content: string | InteractionContentEphemeral,
			file?: FileContent | FileContent[]
		): Promise<Message<TextableChannel>>;
		createEphemeralMessage(
			content: string | InteractionContent,
			file?: FileContent | FileContent[]
		): Promise<void>;
	}
}

declare function aderis(Eris: typeof import('eris')): void;

export = aderis;
