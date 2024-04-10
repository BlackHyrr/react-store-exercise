import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import knightReducer from "./reducer/knightReducer.js";
import { LOG_ACTION } from "./constant/action-type.js";
import logReducer from "./reducer/logReducer.js";
import { deepDiff } from "../utils/log.js";

const rootReducer = combineReducers({
    dragons: dragonReducer,
    knights: knightReducer,
    logs: logReducer,
});

const logMiddleware = (store) => (next) => (action) => {
    const prevState = store.getState();
    next(action);
    const nextState = store.getState();

    if (action.type !== LOG_ACTION) {
        const diff = deepDiff(prevState, nextState);

        diff.forEach(({ path, oldValue, newValue }) => {

            store.dispatch({
                type: LOG_ACTION,
                payload: {
                    timestamp: new Date().toISOString(),
                    name: action.type,
                    message: `Property ${path} changed from ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`,
                },
            });
        });
    }
}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        logMiddleware,
    ))
);

export default store