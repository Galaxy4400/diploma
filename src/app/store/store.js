import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { appReducer } from "../../entities/app";
import { authReducer } from "../../entities/auth";
import { accountReducer } from "../../entities/account";
import { accountsReducer } from "../../entities/accounts";
import { operationReducer } from "../../entities/operation";
import { operationsReducer } from "../../entities/operations";
import { categoryReducer } from "../../entities/category";
import { categoriesReducer } from "../../entities/categories";


const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
	account: accountReducer,
	accounts: accountsReducer,
	operation: operationReducer,
	operations: operationsReducer,
	category: categoryReducer,
	categories: categoriesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));