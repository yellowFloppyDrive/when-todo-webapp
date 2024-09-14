import { Data } from "./Data";
import "./style.css";
import { runCreateTodoForm } from "./runCreateTodoForm";
import { runCreateTodoList } from "./runCreateTodoList";
import { whenAppStarts } from "./whenAppStarts";
import { whenTodoFormSubmits } from "./whenTodoFormSubmits";

function main() {
	const data: Data = {
		todoForm: runCreateTodoForm((text: string) => {
			whenTodoFormSubmits(text, data);
		}),
		todoList: runCreateTodoList(),
	};

	whenAppStarts(data);
}

main();
