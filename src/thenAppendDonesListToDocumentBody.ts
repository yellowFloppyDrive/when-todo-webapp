import { Data } from "./Data";
import { runAppendDonesListToDocumentBody } from "./runAppendDonesListToDocumentBody";

export function thenAppendDonesListToDocumentBody(data: Data): void {
	data.donesListViews.forEach(donesListView => {
		runAppendDonesListToDocumentBody(donesListView);
	});
}
