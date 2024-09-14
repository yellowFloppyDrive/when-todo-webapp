import { Data } from "./Data";
import { thenCompleteTodo } from "./thenCompleteTodo";
import { thenInitializeDonesViewListIfNeeded } from "./thenInitializeDonesViewListIfNeeded";
import { thenPutTodoToTheTopOfDoneTasks } from "./thenPutTodoToTheTopOfDoneTasks";

export function whenTodoElementCompleteButtonClicked(id: string, data: Data) {
	thenCompleteTodo(id, data);
	thenInitializeDonesViewListIfNeeded(data);
	thenPutTodoToTheTopOfDoneTasks(id, data);
}
