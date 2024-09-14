import { runCreateElement } from "./runCreateElement";
import { runFindTextInputInTodoForm } from "./runFindTextInputInTodoForm";
import { runFindTodoFormFormElement } from "./runFindTodoFormFormElement";

export function runCreateTodoForm(onSubmit: (text: string) => void): Element {
    const todoForm = runCreateElement(`
		<div>
			<form>
				<div>
					<input name="text"/>
				</div>

				<div>
					<button>Add Todo</button>
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
