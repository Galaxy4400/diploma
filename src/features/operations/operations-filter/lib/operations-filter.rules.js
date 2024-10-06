import { format } from 'date-fns';
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
		if (!value || !value[0] || !value[1]) return undefined;

		const startDate = new Date(value[0]);
		const endDate = new Date(value[1]);

		const formattedStartDate = format(startDate, DATETIME_FORMAT);
		const formattedEndDate = format(endDate, DATETIME_FORMAT);

		return [formattedStartDate, formattedEndDate];
	});

export const operationsFilterRules = yup.object().shape({
	accountId: accountIdRules,
	categoryId: categoryIdRules,
	daterange: daterangeRules,
});
