import { createAsyncThunk } from '@reduxjs/toolkit';
import { AccountType, getAccount } from 'shared/api/account';
import { ErrorType, ID } from 'shared/types';

export const getAccountData = createAsyncThunk<AccountType, ID, { rejectValue: ErrorType }>(
	'account/getAccountData',
	async (id, { rejectWithValue }) => {
		try {
			const { account, error } = await getAccount(id);

			if (!account) {
				throw new Error(error as string);
			}

			return account;
		} catch (error: unknown) {
			const knownError = error as ErrorType;

			return rejectWithValue(knownError);
		}
	},
);
