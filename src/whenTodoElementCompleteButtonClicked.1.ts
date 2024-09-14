import { Data } from "./Data";
import { thenCompleteTodo } from "./thenCompleteTodo";
import { thenPutTodoToTheTopOfTheCompleteTodos } from "./whenTodoElementCompleteButtonClicked";


export function whenTodoElementCompleteButtonClicked(id: string, data: Data) {
    thenCompleteTodo(id, data);
    thenPutTodoToTheTopOfTheCompleteTodos(id, data);
}
