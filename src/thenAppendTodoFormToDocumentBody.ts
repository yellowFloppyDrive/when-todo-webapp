import { Data } from "./Data";
import { runAppendTodoFormToDocumentBody } from "./runAppendTodoFormToDocumentBody";

export function thenAppendTodoFormToDocumentBody(data: Data) {
	runAppendTodoFormToDocumentBody(data.todoForm);
}
