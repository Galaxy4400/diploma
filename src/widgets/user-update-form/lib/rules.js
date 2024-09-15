import * as yup from 'yup';

export const userUpdateFormRules = yup.object().shape({
	login: yup.string().required().min(3).max(15),
	password: yup.string().when('password', {
		is: (value) => value?.length,
		then: (schema) => schema.min(3).max(15),
		otherwise: (schema) => schema.nullable(),
	}),
	passcheck: yup.string().oneOf([yup.ref('password'), null]),
}, [['password', 'password']]);
