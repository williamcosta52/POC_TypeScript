import { Request, Response } from "express";
import * as taskService from "../services/tasks.service";
import httpStatus from "http-status";
import { Task } from "../protocols";

export async function getTasks(req: Request, res: Response) {
	try {
		const allTasks = await taskService.findTasks();
		res.status(httpStatus.OK).send(allTasks);
	} catch (err) {
		res.send(err.message);
	}
}
export async function CreateTask(req: Request, res: Response) {
	const taskInfo = req.body as Task;
	try {
		taskService.createTask(taskInfo);
		res.sendStatus(httpStatus.CREATED);
	} catch (err) {
		res.send(err.message);
	}
}
export async function updateTask(req: Request, res: Response) {
	const id = req.params.id as string;
	const status = req.body.status as string;
	try {
		taskService.updateTask(id, status);
		res.sendStatus(httpStatus.OK);
	} catch (err) {
		res.send(err.message);
	}
}
export async function deleteTask(req: Request, res: Response) {
	const id = req.params.id as string;
	try {
		taskService.deleteTask(id);
		res.sendStatus(httpStatus.OK);
	} catch (err) {
		res.send(err.message);
	}
}
export async function getTasksByName(req: Request, res: Response) {
	const name = req.params.name.toLowerCase() as string;
	try {
		const tasks = await taskService.getTasksByUserName(name);
		res.status(httpStatus.OK).send(tasks);
	} catch (err) {
		res.send(err.message);
	}
}
