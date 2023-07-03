import { Task } from "../protocols";
import * as taskDB from "../repositories/tasks.repository";

export function findTasks() {
	return taskDB.findAllTaskDB();
}
export function createTask(taskInfo: Task) {
	return taskDB.createTaskDB(taskInfo);
}
export async function updateTask(id: string, status: string) {
	const task = await taskDB.findTaskByID(id);
	return taskDB.updateTask(task[0].id, status);
}
export async function deleteTask(id: string) {
	const task = await taskDB.findTaskByID(id);
	return await taskDB.deleteTaskDB(task[0].id);
}
export async function getTasksByUserName(name: string) {
	return await taskDB.findTasksByUserName(name);
}
