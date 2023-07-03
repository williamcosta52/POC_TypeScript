import { Router } from "express";
import * as tasksController from "../controllers/tasks.controller";
import { validateSchema } from "../middlewares/validate";
import { TaskSchema } from "../schemas/task.schema";

const taskRouter = Router();

taskRouter.get("/tasks", tasksController.getTasks);
taskRouter.get("/tasks/:name", tasksController.getTasksByName);
taskRouter.post(
	"/create",
	validateSchema(TaskSchema),
	tasksController.CreateTask
);
taskRouter.patch("/tasks/:id", tasksController.updateTask);
taskRouter.delete("/tasks/:id", tasksController.deleteTask);

export default taskRouter;
