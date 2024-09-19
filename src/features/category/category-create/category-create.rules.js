import * as yup from 'yup';

export const categoryCreateFormRules = yup.object().shape({
	typeId: yup.number().required(),
	iconId: yup.number().required(),
	name: yup.string().required().min(3).max(50),
});