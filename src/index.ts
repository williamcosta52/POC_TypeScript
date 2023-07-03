import express, { json } from "express";
import taskRouter from "./routers/task.router";

const app = express();

app.use(json());

app.use(taskRouter);

const PORT: number = parseInt(process.env.PORT) || 5000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
