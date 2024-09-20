import { ACCOUNT_TYPES } from "./account-types";

export const getAccountType = (id) => ACCOUNT_TYPES.find(type => type.id === id);