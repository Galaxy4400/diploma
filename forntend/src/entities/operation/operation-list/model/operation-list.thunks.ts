import { createAsyncThunk } from '@reduxjs/toolkit';
import { PagingData, QueryData } from 'shared/api';
import { getOperations, OperationQueryParams, OperationType } from 'shared/api/operation';
import { ErrorType } from 'shared/types';

export const fetchGetOperationList = createAsyncThunk<
	PagingData<OperationType>,
	OperationQueryParams & QueryData,
	{ rejectValue: ErrorType }
>('operations/fetchGetOperationList', async (queryData, { rejectWithValue }) => {
	try {
		const { pagingData, error } = await getOperations(queryData);

		if (!pagingData) {
			throw new Error(error as string);
		}

		return pagingData;
	} catch (error: unknown) {
		const knownError = error as ErrorType;

		return rejectWithValue(knownError);
	}
});

export const fetchGetOperationListAdd = createAsyncThunk<
	PagingData<OperationType>,
	OperationQueryParams & QueryData,
	{ rejectValue: ErrorType }
>('operations/fetchGetOperationListAdd', async (queryData, { rejectWithValue }) => {
	try {
		const { pagingData, error } = await getOperations(queryData);

		if (!pagingData) {
			throw new Error(error as string);
		}

		return pagingData;
	} catch (error: unknown) {
		const knownError = error as ErrorType;

		return rejectWithValue(knownError);
	}
});
