import type { Role } from 'eris';
import { loadProperty } from '../loaders';

export = (Eris: typeof import('eris')) => {
	loadProperty(
		Eris,
		'Role',
		function hexColor(this: Role) {
			return `#${this.color.toString(16).padStart(6, '0')}`;
		},
		true
	);
};
