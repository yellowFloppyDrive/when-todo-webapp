export function runPrependTodoViewToDonesList(
	donesList: Element,
	todoView: Element
): void {
	donesList.prepend(todoView);
}
