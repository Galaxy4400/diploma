import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "../../entities/auth";
import { accountReducer } from "../../entities/account";
import { accountsReducer } from "../../entities/accounts";


const rootReducer = combineReducers({
	auth: authReducer,
	account: accountReducer,
	accounts: accountsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));