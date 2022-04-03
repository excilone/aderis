/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ErisClasses } from './typings';

export function loadProperty(
	Eris: typeof import('eris'),
	className: keyof ErisClasses,
	callback: () => any,
	isGet: true
): void;
export function loadProperty(
	Eris: typeof import('eris'),
	className: keyof ErisClasses,
	callback: (...args: any[]) => any,
	isGet?: false
): void;
export function loadProperty(
	Eris: typeof import('eris'),
	className: keyof ErisClasses,
	callback: (...args: any[]) => any,
	isGet = false
) {
	if (callback.name in Eris[className].prototype)
		throw new Error(
			`The property ${callback.name} is already loaded in the class "${className}"`
		);
	Object.defineProperty(
		Eris[className].prototype,
		callback.name,
		isGet ? { get: callback } : { value: callback }
	);
}

export function loadImport(
	Eris: typeof import('eris'),
	fn: (new (...args: any[]) => any) | ((...args: any[]) => any)
) {
	if (fn.name in Eris) throw new Error(`The "${fn.name}" import is already loaded.`);
	Object.defineProperty(Eris, fn.name, { value: fn });
}
