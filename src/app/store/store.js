import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "../../entities/auth";
import { accountReducer } from "../../entities/account";
import { accountsReducer } from "../../entities/accounts";
import { operationReducer } from "../../entities/operation";
import { operationsReducer } from "../../entities/operations";
import { categoryReducer } from "../../entities/category";


const rootReducer = combineReducers({
	auth: authReducer,
	account: accountReducer,
	accounts: accountsReducer,
	operation: operationReducer,
	operations: operationsReducer,
	category: categoryReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));