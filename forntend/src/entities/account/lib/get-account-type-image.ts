import { ID } from 'shared/types';
import { ACCOUNT_TYPES } from '../../../entities/account';

export const getAccountTypeImage = (typeId: ID) => ACCOUNT_TYPES.find((type) => type.id === typeId)?.icon;
