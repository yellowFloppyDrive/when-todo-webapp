import { Data } from "./Data";
import { runAppendEmptyListMessageToDocumentBody } from "./runAppendEmptyListMessageToDocumentBody";

export function thenAppendEmptyListMessageToDocumentBody(data: Data): void {
	runAppendEmptyListMessageToDocumentBody(data.emptyListMessage);
}
