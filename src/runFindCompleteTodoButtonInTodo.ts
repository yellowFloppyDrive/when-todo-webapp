export function runFindCompleteTodoButtonInTodo(todo: Element): HTMLButtonElement {
    const button = todo.querySelector("button");

    if (button instanceof HTMLButtonElement) {
        return button;
    }

    throw new Error("Todo element does not contain a complete button");
}
