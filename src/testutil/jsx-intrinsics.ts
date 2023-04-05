export declare namespace JSX {
	export type Element = any /* extends Node */;

	/**
	 * Attributes of intrinsic elements.
	 */
	export type IntrinsicElements = {
		[K in keyof Elements]: Parameters<Elements[K]>[0];
	};

	/**
	 * Return types of intrinsic elements.
	 */
	export type IntrinsicElementsNodes = {
		[K in keyof Elements]: ReturnType<Elements[K]>;
	};
}

interface ElementAttributes {
	className?: string;
	id?: string;
	style?: string;
}

export interface Elements {
	div: (props: ElementAttributes) => HTMLDivElement;
	span: (props: ElementAttributes) => HTMLSpanElement;
	button: (props: ElementAttributes) => HTMLButtonElement;
	body: (props: ElementAttributes) => HTMLBodyElement;
	html: (props: ElementAttributes) => HTMLHtmlElement;
}

export type WithChildren<T> = T & {
	children: Array<any>;
};
