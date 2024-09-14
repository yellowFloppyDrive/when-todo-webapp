import { runCreateElement } from "./runCreateElement";
import { runFindCompleteButtonInTodoElement } from "./runFindCompleteButtonInTodoElement";

export function runCreateTaskElement(
	text: string,
	status: string,
	onCompleteClicked: () => void,
): Element {
	const todoElement = runCreateElement(`
		<div style="border: 1px solid black; background: white; border-radius: 4px; padding: 1rem; width: 300px; max-width: calc(100% - 2rem);">
			<h2>${text}</h2>
			<p>${status}</p>
			<div style="display: flex; justify-content: right;">
				<button>COMPLETE</button>
			</div>
		</div>
	`);

	const button = runFindCompleteButtonInTodoElement(todoElement);
	button.onclick = () => onCompleteClicked();

	return todoElement;
}
