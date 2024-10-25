import { createSelector } from '@reduxjs/toolkit';

export const selectAccount = createSelector(
	(state: RootState) => state.account,
	(account) => account,
);

export const selectAccountId = createSelector(selectAccount, (account) => account.id);
