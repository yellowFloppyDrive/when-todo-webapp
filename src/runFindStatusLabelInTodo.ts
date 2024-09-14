export function runFindStatusLabelInTodo(todo: Element): HTMLElement {
	const p = todo.querySelector("p");

	if (p instanceof HTMLElement) {
		return p;
	}

	throw new Error("Todo does not contain a <p>");
}
