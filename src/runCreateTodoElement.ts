import { Todo } from "./Todo";
import { runCreateElement } from "./runCreateElement";
import { runFindCompleteButtonInTodoElement } from "./runFindCompleteButtonInTodoElement";

export function runCreateTodoElement(
	todo: Todo,
	onCompleteClicked: () => void,
): Element {
	const todoElement = runCreateElement(`
		<div data-key="${todo.id}" style="border: 1px solid black; background: white; border-radius: 4px; width: 300px; max-width: calc(100% - 2rem);">
			<h2>${todo.text}</h2>
			<p data-field="todo-status">${todo.status}</p>
			<div>
				<button>COMPLETE</button>
			</div>
		</div>
	`);

	const button = runFindCompleteButtonInTodoElement(todoElement);
	button.onclick = () => onCompleteClicked();

	return todoElement;
}
