import { Data } from "./Data";
import { runAppendDonesListToDocumentBody } from "./runAppendDonesListToDocumentBody";
import { runCreateDonesList } from "./runCreateDonesList";

export function thenInitializeDonesViewListIfNeeded(data: Data) {
	if (data.donesListViews.length === 0) {
		data.donesListViews.push(runCreateDonesList());
		runAppendDonesListToDocumentBody(data.donesListViews[0]);
	}
}
