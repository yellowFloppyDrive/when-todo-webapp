import { Data } from "./Data";
import { thenPrependTaskToTodoList } from "./thenPrependTodoToTodoList";
import { thenClearTheTodoInputText } from "./thenClearTheTodoInputText";

export function whenTodoFormSubmits(text: string, data: Data): void {
	thenPrependTaskToTodoList(text, data);
	thenClearTheTodoInputText(data);
}
