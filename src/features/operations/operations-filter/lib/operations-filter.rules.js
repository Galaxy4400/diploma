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

const daterangeRules = yup
	.array()
	.nullable()
	.notRequired()
	.transform((value) => (!value[0] || !value[1] ? undefined : value));

export const operationsFilterRules = yup.object().shape({
	accountId: accountIdRules,
	categoryId: categoryIdRules,
	daterange: daterangeRules,
});
