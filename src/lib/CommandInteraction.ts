import type { CommandInteraction, FileContent } from 'eris';
import { loadProperty } from '../loaders';
import type { InteractionContentEphemeral } from '../typings';

export = (Eris: typeof import('eris')) => {
	loadProperty(
		Eris,
		'CommandInteraction',
		function deferEphemeral(this: CommandInteraction) {
			return this.defer(64);
		}
	);
	loadProperty(
		Eris,
		'CommandInteraction',
		function createEphemeralFollowup(
			this: CommandInteraction,
			content: string | InteractionContentEphemeral,
			file?: FileContent | FileContent[]
		) {
			if (typeof content === 'string')
				return this.createFollowup({ content, flags: 64 }, file);
			return this.createFollowup({ ...content, flags: 64 }, file);
		}
	);
	loadProperty(
		Eris,
		'CommandInteraction',
		function createEphemeralMessage(
			this: CommandInteraction,
			content: string | InteractionContentEphemeral,
			file?: FileContent | FileContent[]
		) {
			if (typeof content === 'string')
				return this.createMessage({ content, flags: 64 }, file);
			return this.createMessage({ ...content, flags: 64 }, file);
		}
	);
};
