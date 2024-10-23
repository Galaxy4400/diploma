import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../../entities/auth';
import { accountReducer } from '../../entities/account';
import { operationReducer } from '../../entities/operation';
import { categoryReducer } from '../../entities/category';
import { operationsReducer } from '../../entities/operations';
import { applicationReducer } from '../../entities/application';

const rootReducer = combineReducers({
	app: applicationReducer,
	auth: authReducer,
	account: accountReducer,
	operation: operationReducer,
	category: categoryReducer,
	operations: operationsReducer,
});

export const store = configureStore({ reducer: rootReducer });
