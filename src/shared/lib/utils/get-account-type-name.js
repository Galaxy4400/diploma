import { ACCOUNT_TYPES } from "../../../entities/account";

export const getAccountTypeName = (typeId) => {
	return ACCOUNT_TYPES.find(type => type.id === typeId).name;
};