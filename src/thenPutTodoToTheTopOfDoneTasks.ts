import { Data } from "./Data";
import { runPrependTodoViewToDonesList } from "./runPrependTodoViewToDonesList";

export function thenPutTodoToTheTopOfDoneTasks(id: string, data: Data) {
	const todo = data.todos.get(id);

	if (todo) {
		data.donesListViews.forEach((donesListView) => {
			runPrependTodoViewToDonesList(donesListView, todo.view);
		});

		data.todos.delete(todo.id);
		data.dones.set(todo.id, todo);
	}
}
