import * as yup from 'yup';

const accountIdRules = yup
	.number()
	.nullable()
	.notRequired()
	.transform((value) => (value === '' ? null : value));

const categoryIdRules = yup
	.number()
	.nullable()
	.notRequired()
	.transform((value) => (value === '' ? null : value));

export const operationsFilterRules = yup.object().shape({
	accountId: accountIdRules,
	categoryId: categoryIdRules,
});
