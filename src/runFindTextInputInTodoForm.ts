export function runFindTextInputInTodoForm(todoForm: Element): HTMLInputElement {
    const textInput = todoForm.querySelector("input");

    if (textInput instanceof HTMLInputElement) {
        return textInput;
    }

    throw new Error("CreateTodoForm does not contain a text input");
}
