import { runCreateElement } from "./runCreateElement";

export function runCreateTodoList() {
	const todoList = runCreateElement(`
		<div>
			<div data-key="todo-list-empty-message">
				No todo items...
			</div>

			<div data-key="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem; background: lightyellow;">
			</div>

			<div style="height: 3rem;"></div>

			<div data-key="completes" style="display: flex; flex-direction: column; align-items: center; gap: 1rem; background: lightgreen;">
			</div>
		</div>
	`);

	return todoList;
}
