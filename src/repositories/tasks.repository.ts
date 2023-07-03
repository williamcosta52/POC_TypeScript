import db from "../database/database.connection";
import { Task } from "../protocols";

export async function findAllTaskDB() {
	const result = await db.query(
		`SELECT t.id, t."taskName" as nome, t.description as descricao, t.day as dia, t.responsible as responsavel, t.status FROM tasks t;`
	);
	return result.rows;
}
export async function createTaskDB(taskInfo: Task) {
	return await db.query(
		`INSERT INTO tasks ("taskName", description, day, responsible ) VALUES ($1, $2, $3, $4)`,
		[
			taskInfo.nome,
			taskInfo.descricao,
			taskInfo.dia,
			taskInfo.responsavel.toLowerCase(),
		]
	);
}
export async function findTaskByID(id: string) {
	const result = await db.query(`SELECT * FROM tasks WHERE id = $1`, [id]);

	if (!result.rowCount) {
		throw { type: "Not Found", message: "Tarefa não encontrada" };
	}
	return result.rows;
}
export async function updateTask(id: string, status: string) {
	return await db.query(`UPDATE tasks SET status = $1 WHERE id = $2`, [
		status,
		id,
	]);
}
export async function deleteTaskDB(id: string) {
	return await db.query(`DELETE FROM tasks WHERE id = $1`, [id]);
}
export async function findTasksByUserName(name: string) {
	const result = await db.query(`SELECT * FROM tasks WHERE responsible = $1`, [
		name.toLowerCase(),
	]);
	return result.rows;
}
