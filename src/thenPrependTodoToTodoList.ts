import { Data } from "./Data";
import { whenTodoElementCompleteButtonClicked } from "./whenTodoElementCompleteButtonClicked";
import { Task } from "./Todo";
import { runCreateTaskElement } from "./runCreateTaskElement";
import { runCreateTodosList } from "./runCreateTodosList";
import { runAppendTodosListToDocumentBody } from "./runAppendTodosListToDocumentBody";

export function thenPrependTaskToTodoList(text: string, data: Data) {
	const status: string = "todo";

	const todoView = runCreateTaskElement(text, status, () => {
		whenTodoElementCompleteButtonClicked(task.id, data);
	});

	const task: Task = {
		id: crypto.randomUUID(),
		text: text,
		status: status,
		view: todoView,
		createdAt: new Date().getTime(),
		completedAt: undefined,
	};

	data.todos.set(task.id, task);

	data.emptyListMessage.remove();

	if (data.todosListViews.length === 0) {
		data.todosListViews.push(runCreateTodosList());
		runAppendTodosListToDocumentBody(data.todosListViews[0]);
	}

	data.todosListViews.forEach((todosListView) => {
		todosListView.prepend(task.view);
	});
}
