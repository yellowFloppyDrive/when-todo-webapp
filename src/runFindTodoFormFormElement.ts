export function runFindTodoFormFormElement(todoForm: Element): HTMLFormElement {
	const form = todoForm.querySelector("form");

	if (form instanceof HTMLFormElement) {
		return form;
	}

	throw new Error("Todo Form does not contain a <form> element!");
}
