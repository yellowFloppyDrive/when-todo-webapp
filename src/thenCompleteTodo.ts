import { Data } from "./Data";
import { runRemoveCompleteButton } from "./runRemoveCompleteButton";
import { runUpdateTodoStatusLabelToCompleted } from "./runUpdateTodoStatusLabelToCompleted";
import { runFindStatusLabelInTodo } from "./runFindStatusLabelInTodo";

export function thenCompleteTodo(id: string, data: Data) {
	const todo = data.todos.get(id);

	if (todo) {
		const statusLabel = runFindStatusLabelInTodo(todo.view);
		runUpdateTodoStatusLabelToCompleted(statusLabel);
		runRemoveCompleteButton(todo.view);
	}
}
