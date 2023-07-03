import Joi from "joi";

export const TaskSchema = Joi.object({
	nome: Joi.string().required(),
	descricao: Joi.string().required(),
	dia: Joi.date().required(),
	responsavel: Joi.string().required(),
	status: Joi.string(),
});
