export function runCreateElement(markup: string): Element {
	const div = document.createElement("div");

	div.innerHTML = markup;

	const element = div.firstElementChild;

	if (element instanceof Element) {
		return element;
	}

	throw new Error("Invalid HTML!");
}
