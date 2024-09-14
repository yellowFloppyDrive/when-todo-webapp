import { Data } from "./Data";
import { runRemoveCompleteButton } from "./runRemoveCompleteButton";
import { runUpdateTodoToCompleted } from "./runUpdateTodoToCompleted";
import { runFindStatusLabelInTodo } from "./runFindStatusLabelInTodo";
import { runFindTodoInTodoList } from "./runFindTodoInTodoList";

export function thenCompleteTodo(id: string, data: Data) {
	const todo = runFindTodoInTodoList(id, data.todoList);
	const statusLabel = runFindStatusLabelInTodo(todo);
	runUpdateTodoToCompleted(statusLabel);
	runRemoveCompleteButton(todo);
}

