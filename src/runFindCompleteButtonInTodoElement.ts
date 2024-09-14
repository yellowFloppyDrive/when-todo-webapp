export function runFindCompleteButtonInTodoElement(
	todoElement: Element,
): HTMLButtonElement {
	const button = todoElement.querySelector("button");

	if (button instanceof HTMLButtonElement) {
		return button;
	}

	throw new Error("TodoElement does not contains a button");
}
