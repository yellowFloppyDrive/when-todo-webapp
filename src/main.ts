import { Data } from "./Data";
import "./style.css";
import { runCreateTodoForm } from "./runCreateTodoForm";
import { whenAppStarts } from "./whenAppStarts";
import { whenTodoFormSubmits } from "./whenTodoFormSubmits";
import { Task } from "./Todo";
import { runCreateEmptyListMessage } from"./runCreateEmptyListMessage";

function main() {
	const data: Data = {
		todoFormView: runCreateTodoForm((text: string) => {
			whenTodoFormSubmits(text, data);
		}),

		emptyListMessage: runCreateEmptyListMessage(),

		todos: new Map<string, Task>(),
		todosListViews: [],

		dones: new Map<string, Task>(),
		donesListViews: [],
	};

	whenAppStarts(data);
}

main();
