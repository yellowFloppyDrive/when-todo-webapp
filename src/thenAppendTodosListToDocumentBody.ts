import { Data } from "./Data";
import { runAppendTodosListToDocumentBody } from "./runAppendTodosListToDocumentBody";

export function thenAppendTodosListToDocumentBody(data: Data): void {
	data.todosListViews.forEach((todosListView) => {
		runAppendTodosListToDocumentBody(todosListView);
	});
}
