import { DRAGON_ADD, DRAGON_DELETE, DRAGON_SET_ERROR, DRAGON_SET_VALUE } from "../constant/action-type"
import { v4 as uuid } from 'uuid';

const initialDragonState = {
    id: uuid(),
    name: '',
    dragons: [],
    error: ''
}

const dragonReducer = (state = initialDragonState, action) => {
    console.log(action)
    switch (action.type) {

        case DRAGON_SET_VALUE:
            return {
                ...state,
                name: action.payload,
                error: ''
            }

        case DRAGON_ADD:
            return {
                ...state,
                dragons: [...state.dragons, {id: state.id, name: state.name.trim()}],
                name: '',
                id: uuid(),
                error: ''
            }

        case DRAGON_DELETE:
            return {
                ...state,
                dragons: state.dragons.filter((dragon) => dragon.id !== action.payload)
            }

        case DRAGON_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state;
    }
}

export default dragonReducer