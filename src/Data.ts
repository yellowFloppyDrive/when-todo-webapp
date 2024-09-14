import { Task } from "./Todo";

export type Data = {
	todoFormView: Element;

	emptyListMessage: Element;

	todos: Map<string, Task>;
	todosListViews: Element[];

	dones: Map<string, Task>;
	donesListViews: Element[];
};
