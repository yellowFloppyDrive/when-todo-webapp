import { runCreateElement } from "./runCreateElement";

export function runCreateEmptyListMessage(): Element {
    const emptyListMessage = runCreateElement(`<div style="display: flex; align-items: center; justify-content: center; height: 200px;">No tasks found...</div>`);

    if (emptyListMessage instanceof Element) {
        return emptyListMessage;
    }

    throw new Error("Invalid EmptyListMessage HTML");
}
