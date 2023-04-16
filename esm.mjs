const aderis = (await import('./dist/index.js')).default;
const eris = await import('eris');

aderis(eris);
