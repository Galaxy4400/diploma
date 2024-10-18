import { yup } from '../../../shared/lib/yup';

export const categoryCreateFormRules = yup.object().shape({
	userId: yup.number().required(),
	typeId: yup.number().required(),
	name: yup.string().required().min(3).max(50),
	amount: yup
		.number()
		.nullable()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.required(),
});
