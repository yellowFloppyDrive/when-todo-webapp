import { Data } from "./Data";
import { thenPrependTodoToTodoList } from "./thenPrependTodoToTodoList";
import { thenClearTheTodoInputText } from "./thenClearTheTodoInputText";

export function whenTodoFormSubmits(text: string, data: Data): void {
	thenPrependTodoToTodoList(text, data);
	thenClearTheTodoInputText(data);
}
