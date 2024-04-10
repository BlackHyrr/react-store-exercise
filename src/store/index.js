import {legacy_createStore as createStore, combineReducers} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import knightReducer from "./reducer/knightReducer.js";

const rootReducer = combineReducers({
    dragons: dragonReducer,
    knights: knightReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

export default store