import * as yup from 'yup';

export const operationCreateFormRules = yup.object().shape({
	userId: yup.number().required(),
	name: yup.string().required().min(3).max(30),
	amount: yup.number().required(),
	// categoryId: yup.number().required(),
	// accountId: yup.number().required(),
});
