export type Task = {
	id: string;
	text: string;
	status: string;
	createdAt: number; // Timestamp
	completedAt: undefined | number; // Timestamp
	view: Element;
};
