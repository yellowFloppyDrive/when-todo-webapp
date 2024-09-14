import { Data } from "./Data";
import { whenTodoElementCompleteButtonClicked } from "./whenTodoElementCompleteButtonClicked.1";
import { Todo } from "./Todo";
import { runCreateTodoElement } from "./runCreateTodoElement";
import { runFindTodosContainerInTodoList } from "./runFindTodosContainerInTodoList";

export function thenPrependTodoToTodoList(text: string, data: Data) {
	const todo: Todo = {
		id: crypto.randomUUID(),
		text: text,
		status: "todo",
	};

	const todoElement = runCreateTodoElement(todo, () => {
		whenTodoElementCompleteButtonClicked(todo.id, data);
	});

	const emptyMessage = data.todoList.querySelector(
		'[data-key="todo-list-empty-message"]',
	);
	if (emptyMessage instanceof Element) {
		emptyMessage.remove();
	}

	const todosContainer: Element = runFindTodosContainerInTodoList(data.todoList);

	todosContainer.prepend(todoElement);
}
