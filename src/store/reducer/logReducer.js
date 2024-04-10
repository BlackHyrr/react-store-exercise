import { LOG_ACTION } from "../constant/action-type";

const initialLogState = [];

const logReducer = (state = initialLogState, action) => {
    switch (action.type) {
        case LOG_ACTION:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default logReducer;