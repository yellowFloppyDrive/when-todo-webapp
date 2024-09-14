import { Data } from "./Data";
import { runAppendTodoListToDocumentBody } from "./runAppendTodoListToDocumentBody";

export function thenAppendTodoListToDocumentBody(data: Data): void {
	runAppendTodoListToDocumentBody(data.todoList);
}
