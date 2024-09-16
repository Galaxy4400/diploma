import * as yup from 'yup';

export const createAccountFormRules = yup.object().shape({
	name: yup.string().required().min(3).max(15),
	typeId: yup.number().required(),
});