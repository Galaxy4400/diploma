import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accountListReducer } from 'entities/account/account-list';
import { accountDataReducer } from 'entities/account/account-data';
import { applicationReducer } from 'entities/application';
import { categoryDataReducer } from 'entities/category/category-data';
import { operationsReducer } from 'entities/operations';
import { categoryListReducer } from 'entities/category/category-list';
import { operationDataReducer } from 'shared/constants';

const rootReducer = combineReducers({
	app: applicationReducer,
	accountData: accountDataReducer,
	accountList: accountListReducer,
	operationData: operationDataReducer,
	categoryData: categoryDataReducer,
	categoryList: categoryListReducer,
	operations: operationsReducer,
});

export const store = configureStore({ reducer: rootReducer });
