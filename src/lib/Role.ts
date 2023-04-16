import type { Role } from 'eris';
import { loadProperty } from '../loaders';
import { randomHexColor } from '../utils';

export = (Eris: typeof import('eris')) => {
	loadProperty(
		Eris,
		'Role',
		function hexColor(this: Role) {
			return `#${this.color.toString(16).padStart(6, '0')}`;
		},
		true
	);
	loadProperty(
		Eris,
		'Role',
		function setColor(
			this: Role,
			color: string | number | [number, number, number],
			reason?: string
		) {
			let c: number;
			if (Array.isArray(color)) {
				c = (color[0] << 16) + (color[1] << 8) + color[2];
			} else {
				if (typeof color === 'number') c = color;
				else if (typeof color === 'string' && color.toUpperCase() === 'RANDOM')
					c = randomHexColor();
				else if (
					typeof color === 'string' &&
					color.startsWith('#') &&
					/#[ABCDEF1234567890]{6}/g.test(color)
				)
					c = Number('0x' + color.slice(1));
				else c = Number(color);
			}
			return this.edit(
				{
					color: c
				},
				reason
			);
		}
	);
};
