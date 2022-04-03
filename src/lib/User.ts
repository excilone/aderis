import type { User, MessageContent, FileContent } from 'eris';
import { loadProperty } from '../loaders';

export = (Eris: typeof import('eris')) => {
	loadProperty(
		Eris,
		'User',
		async function send(
			this: User,
			content: MessageContent,
			file?: FileContent | FileContent[]
		) {
			const channel = await this.getDMChannel();

			return channel.createMessage(content, file);
		}
	);
	loadProperty(
		Eris,
		'User',
		function tag(this: User) {
			return `${this.username}#${this.discriminator}`;
		},
		true
	);
};
