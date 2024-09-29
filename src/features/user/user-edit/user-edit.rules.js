import * as yup from 'yup';

const loginRules = yup.string().required().min(3).max(30);

const emailRules = yup.string().nullable().email();

const nameRules = yup.string().nullable().min(3).max(30);

const surnameRules = yup.string().nullable().min(3).max(30);

const addressRules = yup.string().nullable().min(3).max(30);

const passwordRules = yup
	.string()
	.transform((value) => (!value ? undefined : value))
	.when('password', {
		is: (value) => value?.length,
		then: (schema) => schema.min(3).max(30),
		otherwise: (schema) => schema.notRequired(),
	});

const passcheckRules = yup
	.string()
	.transform((value) => (!value ? undefined : value))
	.when('password', {
		is: (value) => value?.length,
		then: (schema) => schema.required().oneOf([yup.ref('password'), null]),
		otherwise: (schema) => schema.notRequired(),
	});

export const editUserFormRules = yup.object().shape(
	{
		login: loginRules,
		// email: emailRules,
		// name: nameRules,
		// surname: surnameRules,
		// address: addressRules,
		password: passwordRules,
		passcheck: passcheckRules,
	},
	[['password', 'password']],
);
