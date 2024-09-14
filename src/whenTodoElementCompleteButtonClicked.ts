import { Data } from "./Data";
import { runFindTodoInTodoList } from "./runFindTodoInTodoList";
import { runFindCompletesContainerInTodoList } from "./runFindCompletesContainerInTodoList";

export function thenPutTodoToTheTopOfTheCompleteTodos(id: string, data: Data) {
	const todo = runFindTodoInTodoList(id, data.todoList);
	const completesContainer = runFindCompletesContainerInTodoList(data.todoList);
	completesContainer.prepend(todo);
}

