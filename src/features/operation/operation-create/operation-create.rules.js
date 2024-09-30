import * as yup from 'yup';

export const operationCreateFormRules = yup.object().shape({
	userId: yup.number().required(),
	amount: yup.number().required(),
	categoryId: yup.number().required(),
	accountId: yup.number().required(),
	comment: yup.string(),
});
