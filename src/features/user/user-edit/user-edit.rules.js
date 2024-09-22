import * as yup from 'yup';

const loginRules = yup.string().required().min(3).max(15);

const passwordRules = yup.string()
	.transform((value) => !value ? undefined : value)
	.when('password', {
		is: (value) => value?.length,
		then: (schema) => schema.min(3).max(15),
		otherwise: (schema) => schema.notRequired(),
	});

const passcheckRules = yup.string()
	.transform((value) => !value ? undefined : value)
	.when('password', {
		is: (value) => value?.length,
		then: (schema) => schema.required().oneOf([yup.ref('password'), null]),
		otherwise: (schema) => schema.notRequired(),
	});


export const editUserFormRules = yup.object().shape({
	login: loginRules,
	password: passwordRules,
	passcheck: passcheckRules,
}, [['password', 'password']]);
