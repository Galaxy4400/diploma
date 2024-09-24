import { ACCOUNT_TYPES } from "../../../entities/account";

export const getAccountImageName = (typeId) => {
	return ACCOUNT_TYPES.find(type => type.id === typeId).icon;
};