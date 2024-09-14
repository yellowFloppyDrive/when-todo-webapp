export function runFindCompletesContainerInTodoList(
	todoList: Element
): Element {
	const completesContainer = todoList.querySelector('[data-key="completes"]');

	if (completesContainer instanceof Element) {
		return completesContainer;
	}

	throw new Error("CompletesContainer does not exist in TodoList");
}
