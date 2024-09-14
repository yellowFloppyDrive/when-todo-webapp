import { Data } from "./Data";
import { thenAppendDonesListToDocumentBody } from "./thenAppendDonesListToDocumentBody";
import { thenAppendEmptyListMessageToDocumentBody } from "./thenAppendEmptyListMessageToDocumentBody";
import { thenAppendTodoFormToDocumentBody } from "./thenAppendTodoFormToDocumentBody";
import { thenAppendTodosListToDocumentBody } from "./thenAppendTodosListToDocumentBody";

export function whenAppStarts(data: Data): void {
	thenAppendTodoFormToDocumentBody(data);
	thenAppendEmptyListMessageToDocumentBody(data);
	thenAppendTodosListToDocumentBody(data);
	thenAppendDonesListToDocumentBody(data);
}
