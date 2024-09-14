import * as yup from 'yup';

export const registerFormRules = yup.object().shape({
	login: yup.string().required().min(3).max(15),
	password: yup.string().required().min(3).max(15),
	passcheck: yup.string().required().oneOf([yup.ref('password'), null]),
});