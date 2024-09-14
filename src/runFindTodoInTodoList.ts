export function runFindTodoInTodoList(id: string, todoList: Element): Element {
	const todo = todoList.querySelector(`[data-key="${id}"]`);

	if (todo instanceof Element) {
		return todo;
	}

	throw new Error(`Todo with id "${id} does not exist inside the TodoList"`);
}
