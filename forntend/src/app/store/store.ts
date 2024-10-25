import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accountReducer } from 'entities/account';
import { applicationReducer } from 'entities/application';
import { authReducer } from 'entities/auth';
import { categoryReducer } from 'entities/category';
import { operationReducer } from 'entities/operation';
import { operationsReducer } from 'entities/operations';

const rootReducer = combineReducers({
	app: applicationReducer,
	auth: authReducer,
	account: accountReducer,
	operation: operationReducer,
	category: categoryReducer,
	operations: operationsReducer,
});

export const store = configureStore({ reducer: rootReducer });
