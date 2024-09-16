import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { authUserReducer } from "../../entities/auth-user";
import { accountReducer } from "../../entities/account";


const rootReducer = combineReducers({
	user: authUserReducer,
	account: accountReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));