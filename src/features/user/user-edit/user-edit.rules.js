import * as yup from 'yup';

export const editUserFormRules = yup.object().shape({
	login: yup.string().required().min(3).max(15),
	password: yup.string()
		.transform((value) => !value ? undefined : value)
		.when('password', {
			is: (value) => value?.length,
			then: (schema) => schema.min(3).max(15),
			otherwise: (schema) => schema.notRequired(),
		}),
	passcheck: yup.string()
		.transform((value) => !value ? undefined : value)
		.oneOf([yup.ref('password'), null]),
}, [['password', 'password']]);
