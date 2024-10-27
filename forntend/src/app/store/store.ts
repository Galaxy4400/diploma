import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accountListReducer } from 'entities/account/account-list';
import { accountDataReducer } from 'entities/account/account-data';
import { applicationReducer } from 'entities/application';
import { categoryDataReducer } from 'entities/category/category-data';
import { operationReducer } from 'entities/operation';
import { operationsReducer } from 'entities/operations';

const rootReducer = combineReducers({
	app: applicationReducer,
	accountData: accountDataReducer,
	accountList: accountListReducer,
	operation: operationReducer,
	categoryData: categoryDataReducer,
	operations: operationsReducer,
});

export const store = configureStore({ reducer: rootReducer });
