import { readdirSync } from 'fs';

export = (Eris: typeof import('eris')) => {
	for (const pull of readdirSync(`${__dirname}/lib`)) {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require(`./lib/${pull}`)(Eris);
	}
};
