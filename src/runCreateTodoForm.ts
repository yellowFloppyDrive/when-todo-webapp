import { runCreateElement } from "./runCreateElement";
import { runFindTextInputInTodoForm } from "./runFindTextInputInTodoForm";
import { runFindTodoFormFormElement } from "./runFindTodoFormFormElement";

export function runCreateTodoForm(onSubmit: (text: string) => void): Element {
	const todoForm = runCreateElement(`
		<div>
			<form>
				<div>
					<input name="text" style="display: block; padding: 0.25rem 0.5rem; width: 100%; box-sizing: border-box;"/>
				</div>

				<div style="margin-top: 0.25rem;">
					<button style="display: block; width: 100%; box-sizing: border-box;">Add Todo</button>
				</div>
			</form>
		</div>
	`);

	const form = runFindTodoFormFormElement(todoForm);

	form.onsubmit = (e) => {
		e.preventDefault();
		const textInput = runFindTextInputInTodoForm(todoForm);
		const text = textInput.value;
		onSubmit(text);
	};

	return todoForm;
}
