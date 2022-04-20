import type {
	PingInteraction,
	CommandInteraction,
	AutocompleteInteraction,
	UnknownInteraction,
	Client,
	ClientEvents,
	ComponentInteraction,
	Message,
	PossiblyUncachedTextableChannel
} from 'eris';
import type { Collection } from '@excilone/collection';

export type ErisClasses = Pick<
	typeof import('eris'),
	| 'AutocompleteInteraction'
	| 'CategoryChannel'
	| 'Channel'
	| 'Client'
	| 'Collection'
	| 'Command'
	| 'CommandClient'
	| 'CommandInteraction'
	| 'ExtendedUser'
	| 'GroupChannel'
	| 'Guild'
	| 'GuildChannel'
	| 'GuildIntegration'
	| 'Interaction'
	| 'Member'
	| 'Message'
	| 'NewsChannel'
	| 'NewsThreadChannel'
	| 'PrivateChannel'
	| 'PrivateThreadChannel'
	| 'Role'
	| 'StageChannel'
	| 'TextChannel'
	| 'ThreadChannel'
	| 'ThreadMember'
	| 'PublicThreadChannel'
	| 'UnknownInteraction'
	| 'User'
	| 'VoiceChannel'
>;

export interface CheckStringData {
	minLength?: number;
	maxLength?: number;
	match?: RegExp;
	length?: number | number[];
	enum?: string[];
}

export interface CheckNumberData {
	min?: number;
	max?: number;
	integer?: boolean;
}

export interface CollectorRequired {
	messageID?: string;
	channelID: string;
	guildID?: string;
	client: Client;
}

export interface CollectorOptions<E extends keyof CollectorClientEvents> {
	filter?(...args: CollectorClientEvents[E]): boolean | Promise<boolean>;
	onRun?(...args: CollectorClientEvents[E]): unknown | Promise<unknown>;
	onEnd?(
		reason: string,
		collected: Collection<string, ClientEvents[E][0]>
	): unknown | Promise<unknown>;
	timeout?: number;
	idle?: boolean;
	max?: number;
	maxReceived?: boolean;
}

export interface CollectorData<E extends keyof CollectorClientEvents>
	extends CollectorOptions<E> {
	event: E;
	data: CollectorRequired;
}

export interface CollectorClientEvents {
	messageCreate: ClientEvents['messageCreate'];
	interactionCreate: [interaction: ComponentInteraction];
}

export type CollectorClientValues =
	| Message<PossiblyUncachedTextableChannel>
	| PingInteraction
	| CommandInteraction
	| ComponentInteraction
	| AutocompleteInteraction
	| UnknownInteraction;
