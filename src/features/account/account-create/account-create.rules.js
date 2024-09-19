import * as yup from 'yup';

export const accountCreateFormRules = yup.object().shape({
	userId: yup.number().required(),
	typeId: yup.number().required(),
	name: yup.string().required().min(3).max(50),
	amount: yup.number(),
});