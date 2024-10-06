import { yup } from '../../../../shared/lib/yup';

const accountIdRules = yup
	.number()
	.nullable()
	.notRequired()
	.transform((value) => (!value ? undefined : value));

const categoryIdRules = yup
	.number()
	.nullable()
	.notRequired()
	.transform((value) => (!value ? undefined : value));

const dateRules = yup
	.string()
	.nullable()
	.notRequired()
	.transform((value) => (!value ? undefined : value));

export const operationsFilterRules = yup.object().shape({
	accountId: accountIdRules,
	categoryId: categoryIdRules,
	date: dateRules,
});
