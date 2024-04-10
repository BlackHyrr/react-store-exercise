import { KNIGHT_ADD, KNIGHT_DELETE, KNIGHT_SET_ERROR, KNIGHT_SET_VALUE } from "../constant/action-type"
import { v4 as uuid } from 'uuid';

const initialKnightState = {
    id: uuid(),
    name: '',
    knights: [],
    error: ''
}

const knightReducer = (state = initialKnightState, action) => {
    console.log(action)
    switch (action.type) {

        case KNIGHT_SET_VALUE:
            return {
                ...state,
                name: action.payload,
                error: ''
            }

        case KNIGHT_ADD:
            return {
                ...state,
                knights: [...state.knights, {id: state.id, name: state.name.trim()}],
                name: '',
                id: uuid(),
                error: ''
            }

        case KNIGHT_DELETE:
            return {
                ...state,
                knights: state.dragons.filter((knight) => knight.id !== action.payload)
            }

        case KNIGHT_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state;
    }
}

export default knightReducer