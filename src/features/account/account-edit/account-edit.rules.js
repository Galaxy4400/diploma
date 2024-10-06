import { yup } from '../../../shared/lib/yup';

export const accountEditFormRules = yup.object().shape({
	typeId: yup.number().required(),
	name: yup.string().required().min(3).max(50),
	amount: yup.number(),
});
