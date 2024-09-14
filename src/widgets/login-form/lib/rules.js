import * as yup from 'yup';

export const authFormRules = yup.object().shape({
	login: yup.string().required().min(3).max(15),
	password: yup.string().required().min(3).max(15),
});