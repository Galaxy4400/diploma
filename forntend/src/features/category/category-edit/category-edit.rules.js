import { yup } from '../../../shared/lib/yup';

export const categoryEditFormRules = yup.object().shape({
	typeId: yup.number().required(),
	icon: yup.string().required(),
	name: yup.string().required().min(3).max(50),
});