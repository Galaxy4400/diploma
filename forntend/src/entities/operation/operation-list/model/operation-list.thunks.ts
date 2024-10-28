import { createAsyncThunk } from '@reduxjs/toolkit';
import { QueryData } from 'shared/api';
import { getOperations, OperationQueryParams, OperationType } from 'shared/api/operation';
import { ErrorType } from 'shared/types';

export const fetchGetOperationList = createAsyncThunk<
	OperationType[],
	OperationQueryParams & QueryData,
	{ rejectValue: ErrorType }
>('account/fetchGetOperationList', async (queryData, { rejectWithValue }) => {
	try {
		const { pagingData, error } = await getOperations(queryData);

		if (!pagingData?.items) {
			throw new Error(error as string);
		}

		return pagingData.items;
	} catch (error: unknown) {
		const knownError = error as ErrorType;

		return rejectWithValue(knownError);
	}
});
