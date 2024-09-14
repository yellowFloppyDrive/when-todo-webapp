import { Data } from "./Data";
import { runClearTodoInputText } from "./runClearTodoInputText";
import { runFindTextInputInTodoForm } from "./runFindTextInputInTodoForm";

export function thenClearTheTodoInputText(data: Data) {
    const textInput = runFindTextInputInTodoForm(data.todoForm);
    runClearTodoInputText(textInput);
}
