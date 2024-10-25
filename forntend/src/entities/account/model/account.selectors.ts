import { RootState } from '@/app/store';

export const selectAccount = ({ account }: RootState) => account;

export const selectAccountId = ({ account }: RootState) => account.id;