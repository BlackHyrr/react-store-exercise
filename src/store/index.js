import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import knightReducer from "./reducer/knightReducer.js";
import { LOG_ACTION } from "./constant/action-type.js";
import logReducer from "./reducer/logReducer.js";

const rootReducer = combineReducers({
    dragons: dragonReducer,
    knights: knightReducer,
    logs: logReducer,
});

const logMiddleware = (store) => (next) => (action) => {
    console.log('Action:', action)
    if (action.type !== LOG_ACTION) {
        store.dispatch({
            type: LOG_ACTION,
            payload: {
                timestamp: new Date().toISOString(),
                name: action.type,
            },
        })
    }
    

    next(action)
}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        logMiddleware,
    ))
);

export default store