import type { Member, Role, MessageContent, FileContent } from 'eris';
import { loadProperty } from '../loaders';

export = (Eris: typeof import('eris')) => {
	loadProperty(
		Eris,
		'Member',
		function roleCollection(this: Member) {
			const coll = new Eris.Collection(Eris.Role);
			for (const role of this.roles) {
				if (this.guild.roles.has(role)) coll.set(role, this.guild.roles.get(role)!);
			}
			return coll;
		},
		true
	);
	loadProperty(
		Eris,
		'Member',
		function highestRole(this: Member) {
			return getHighestRole(Array.from(this.roleCollection.values()));
		},
		true
	);
	loadProperty(
		Eris,
		'Member',
		function roleColor(this: Member) {
			return getHighestRole(this.roleCollection.filter((x) => x.color !== 0));
		},
		true
	);
	loadProperty(
		Eris,
		'Member',
		function displayName(this: Member) {
			return this.nick !== null ? this.nick : this.user.username;
		},
		true
	);
	loadProperty(
		Eris,
		'Member',
		function send(
			this: Member,
			content: MessageContent,
			file?: FileContent | FileContent[]
		) {
			return this.user.send(content, file);
		}
	);
};

function getHighestRole(roles: Role[]): Role {
	return roles.sort((a, b) => b.position - a.position)[0];
}
