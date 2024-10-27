import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accountListReducer } from 'entities/account/account-list';
import { accountViewReducer } from 'entities/account/account-view';
import { applicationReducer } from 'entities/application';
import { categoryViewReducer } from 'entities/category/category-view';
import { operationReducer } from 'entities/operation';
import { operationsReducer } from 'entities/operations';

const rootReducer = combineReducers({
	app: applicationReducer,
	accountView: accountViewReducer,
	accountList: accountListReducer,
	operation: operationReducer,
	categoryView: categoryViewReducer,
	operations: operationsReducer,
});

export const store = configureStore({ reducer: rootReducer });
