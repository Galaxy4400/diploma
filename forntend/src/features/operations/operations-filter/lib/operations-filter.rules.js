import { endOfDay, format, startOfDay } from 'date-fns';
import { DATETIME_FORMAT, yup } from '../../../../shared/lib/yup';

const accountRules = yup
	.string()
	.nullable()
	.notRequired()
	.transform((value) => (!value ? undefined : value));

const categoryRules = yup
	.string()
	.nullable()
	.notRequired()
	.transform((value) => (!value ? undefined : value));

const daterangeRules = yup
	.array()
	.nullable()
	.notRequired()
	.transform((value) => {
		if (!value || (!value[0] && !value[1])) return undefined;

		const startDate = value[0] ? startOfDay(value[0]).toISOString() : undefined;
		const endDate = value[1] ? endOfDay(value[1]).toISOString() : undefined;

		return [startDate, endDate];
	});

const amountrangeRules = yup
	.array()
	.nullable()
	.notRequired()
	.transform((value) => {
		if (!value || (!value[0] && !value[1])) return undefined;

		return value;
	});

export const operationsFilterRules = yup.object().shape({
	account: accountRules,
	category: categoryRules,
	daterange: daterangeRules,
	amountrange: amountrangeRules,
});
