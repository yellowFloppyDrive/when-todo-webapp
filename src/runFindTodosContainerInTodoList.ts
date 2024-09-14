export function runFindTodosContainerInTodoList(todoList: Element): Element {
	const todosContainer = todoList.querySelector('[data-key="todos"]');

	if (todosContainer instanceof Element) {
		return todosContainer;
	}

	throw new Error("TodoList does not contain a TodoContainer!");
}
