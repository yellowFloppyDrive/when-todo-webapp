import { Data } from "./Data";
import { thenAppendTodoFormToDocumentBody } from "./thenAppendTodoFormToDocumentBody";
import { thenAppendTodoListToDocumentBody } from "./thenAppendTodoListToDocumentBody";

export function whenAppStarts(data: Data): void {
	thenAppendTodoFormToDocumentBody(data);
	thenAppendTodoListToDocumentBody(data);
}
