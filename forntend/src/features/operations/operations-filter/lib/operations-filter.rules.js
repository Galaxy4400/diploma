import { endOfDay, format, startOfDay } from 'date-fns';
import { DATETIME_FORMAT, yup } from '../../../../shared/lib/yup';

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
	.transform((value) => {
		if (!value || (!value[0] && !value[1])) return undefined;

		const startDate = value[0] ? format(startOfDay(value[0]), DATETIME_FORMAT) : undefined;
		const endDate = value[1] ? format(endOfDay(value[1]), DATETIME_FORMAT) : undefined;

		return [startDate, endDate];
	});

const pricerangeRules = yup
	.array()
	.nullable()
	.notRequired()
	.transform((value) => {
		if (!value || (!value[0] && !value[1])) return undefined;

		return value;
	});

export const operationsFilterRules = yup.object().shape({
	accountId: accountIdRules,
	categoryId: categoryIdRules,
	daterange: daterangeRules,
	pricerange: pricerangeRules,
});
