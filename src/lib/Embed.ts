import type Eris from 'eris';
import { loadImport } from '../loaders';
import { checkType, randomHexColor } from '../utils';

class MessageEmbed implements Eris.EmbedOptions {
	author?: Eris.EmbedAuthorOptions;
	color?: number;
	description?: string;
	fields?: Eris.EmbedField[];
	footer?: Eris.EmbedFooterOptions;
	image?: Eris.EmbedImageOptions;
	thumbnail?: Eris.EmbedImageOptions;
	timestamp?: string | Date;
	title?: string;
	url?: string;
	constructor(data: Eris.EmbedOptions = {}) {
		Object.assign(this, data);
	}

	setTitle(title: string): this {
		this.title = checkType(title, 'STRING', {
			maxLength: MessageEmbed.MAX_TITLE_LENGTH
		});
		if (this.title!.length < 1) this.title = undefined;
		return this;
	}

	setDescription(description: string): this {
		this.description = checkType(description, 'STRING', {
			maxLength: MessageEmbed.MAX_DESCRIPTION_LENGTH
		});
		if (this.description!.length < 1) this.description = undefined;
		return this;
	}

	setURL(url: string) {
		this.url = checkType(url, 'STRING');
		return this;
	}

	setTimestamp(timestamp: string): this;
	setTimestamp(unixTimestamp: number): this;
	setTimestamp(date: Date): this;
	setTimestamp(timestamp: string | number | Date) {
		this.timestamp = new Date(timestamp);
		return this;
	}

	setColor(hex: number): this;
	setColor(r: number, g: number, b: number): this;
	setColor(random: 'RANDOM'): this;
	setColor(hexString: `#${string}`): this;
	setColor(color: number | string, g?: number, b?: number) {
		if (arguments.length === 1 && typeof color === 'number') this.color = color;
		else if (typeof color === 'string' && color.toUpperCase() === 'RANDOM') {
			this.color = randomHexColor();
		} else if (typeof color === 'string' && color.startsWith('#')) {
			checkType(color, 'STRING', {
				match: /#[ABCDEF1234567890]{6}/g
			});
			this.color = Number(color.replace('#', '0x'));
		} else if (
			typeof color === 'number' &&
			typeof g === 'number' &&
			typeof b === 'number'
		) {
			const colors: [number, number, number] = [color, g, b];
			for (const c of colors.values()) {
				checkType(c, 'NUMBER', {
					integer: true,
					max: 255,
					min: 0
				});
			}
			this.color = (colors[0] << 16) + (colors[1] << 8) + colors[2];
		} else throw new TypeError('Invalid Embed color.');

		return this;
	}

	setFooter(text: string, iconURL?: string): this;
	setFooter(footer: Eris.EmbedFooterOptions): this;
	setFooter(footer: Eris.EmbedFooterOptions | string, iconURL?: string): this {
		this.footer =
			typeof footer === 'string'
				? {
						text: checkType(footer, 'STRING', {
							maxLength: MessageEmbed.MAX_FOOTER_TEXT_LENGTH
						}),
						icon_url: iconURL ?? this.footer?.icon_url
				  }
				: {
						text: checkType(footer.text, 'STRING', {
							maxLength: MessageEmbed.MAX_FOOTER_TEXT_LENGTH
						}),
						icon_url: footer.icon_url ?? this.footer?.icon_url
				  };
		if (this.footer?.text.length < 1) this.footer = undefined;
		else if (this.footer?.icon_url !== undefined && this.footer?.icon_url.length < 1)
			this.footer.icon_url = undefined;
		return this;
	}

	setImage(image: Eris.EmbedImageOptions | string) {
		this.image = typeof image === 'string' ? { url: image } : image;
		return this;
	}

	setThumbnail(thumbnail: Eris.EmbedImageOptions | string) {
		this.thumbnail = typeof thumbnail === 'string' ? { url: thumbnail } : thumbnail;
		return this;
	}

	setAuthor(author: Eris.EmbedAuthorOptions): this;
	setAuthor(name: string, iconURL?: string, url?: string): this;
	setAuthor(author: Eris.EmbedAuthorOptions | string, icon_url?: string, url?: string) {
		this.author =
			typeof author === 'string'
				? {
						name: checkType(author, 'STRING', {
							maxLength: MessageEmbed.MAX_AUTHOR_NAME_LENGTH
						}),
						icon_url,
						url
				  }
				: {
						name: checkType(author.name, 'STRING', {
							maxLength: MessageEmbed.MAX_AUTHOR_NAME_LENGTH
						}),
						icon_url: author.icon_url ?? this.author?.icon_url,
						url: author.url ?? this.author?.url
				  };
		return this;
	}

	setFields(fields: Eris.EmbedField[]) {
		this.fields = fields;
		return this;
	}

	addField(field: Eris.EmbedField): this;
	addField(name: string, value: string, inline?: boolean): this;
	addField(field: string | Eris.EmbedField, value?: string, inline?: boolean) {
		if (typeof field === 'string' && value === undefined)
			throw new Error('Embed field value is required.');
		return this.addFields(
			typeof field === 'string'
				? {
						name: field,
						value: value!,
						inline
				  }
				: field
		);
	}

	addFields(...fields: Eris.EmbedField[] | Eris.EmbedField[][]) {
		const _fields: Eris.EmbedField[] = this.fields ?? [];
		for (const field of fields.values()) {
			if (Array.isArray(field)) _fields.push(...field.values());
			else _fields.push(field);
		}
		return this.setFields(_fields);
	}

	toJSON(): Eris.EmbedOptions {
		return {
			author: this.author,
			image: this.image,
			color: this.color,
			description: this.description,
			fields: this.fields
				?.filter((field) => field.name.length !== 0 && field.value.length !== 0)
				.map((field) => {
					return {
						name: checkType(field.name, 'STRING', {
							maxLength: MessageEmbed.MAX_FIELD_NAME_LENGTH
						}),
						value: checkType(field.name, 'STRING', {
							maxLength: MessageEmbed.MAX_FIELD_VALUE_LENGTH
						}),
						inline: field.inline
					};
				}),
			footer: this.footer,
			thumbnail: this.thumbnail,
			timestamp: this.timestamp,
			title: this.title,
			url: this.url
		};
	}

	static MAX_TITLE_LENGTH = 256;
	static MAX_DESCRIPTION_LENGTH = 4096;
	static MAX_FIELD_NAME_LENGTH = 256;
	static MAX_FIELD_VALUE_LENGTH = 1024;
	static MAX_FIELDS_LENGTH = 25;
	static MAX_FOOTER_TEXT_LENGTH = 2048;
	static MAX_AUTHOR_NAME_LENGTH = 256;
}

export = (Eris: typeof import('eris')) => {
	loadImport(Eris, MessageEmbed);
};
