import * as yup from 'yup';

export const accountCreateFormRules = yup.object().shape({
	name: yup.string().required().min(3).max(50),
	typeId: yup.number().required(),
});