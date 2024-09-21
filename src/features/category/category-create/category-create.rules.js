import * as yup from 'yup';

export const categoryCreateFormRules = yup.object().shape({
	userId: yup.number().required(),
	typeId: yup.number().required(),
	icon: yup.string().required(),
	name: yup.string().required().min(3).max(50),
});