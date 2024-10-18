import { yup } from '../../../shared/lib/yup';

export const operationCreateFormRules = yup.object().shape({
	userId: yup.number().required(),
	amount: yup
		.number()
		.nullable()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.required(),
	categoryId: yup
		.number()
		.nullable()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.required(),
	accountId: yup
		.number()
		.nullable()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.required(),
	comment: yup.string(),
});
