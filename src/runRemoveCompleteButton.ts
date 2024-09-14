import { runFindCompleteTodoButtonInTodo } from "./runFindCompleteTodoButtonInTodo";

export function runRemoveCompleteButton(todo: Element): void {
	const completeButton = runFindCompleteTodoButtonInTodo(todo);
	completeButton.remove();
}
