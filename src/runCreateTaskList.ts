import { runCreateElement } from "./runCreateElement";

export function runCreateTaskList(backgroundColor: "lightyellow"|"lightgreen") {
	const todoList = runCreateElement(`
		<div data-key="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 2rem; background: ${backgroundColor};"></div>
	`);

	return todoList;
}
