import { ACCOUNT_TYPES } from "../../../entities/account";

export const getAccountTypeImage = (typeId) => {
	return ACCOUNT_TYPES.find(type => type.id === typeId).icon;
};