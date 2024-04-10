import {DRAGON_ADD, DRAGON_DELETE, DRAGON_SET_ERROR, DRAGON_SET_VALUE, KNIGHT_ADD, KNIGHT_DELETE, KNIGHT_SET_AGE, KNIGHT_SET_ERROR, KNIGHT_SET_VALUE, LOG_ACTION} from "../constant/action-type.js";

export const addDragon = () => ({
    type: DRAGON_ADD
})

export const setDragonName = (payload) => ({
    type: DRAGON_SET_VALUE,
    payload
})

export const deleteDragon = (payload) => ({
    type: DRAGON_DELETE,
    payload
})

export const setDragonError = (payload) => {
    return {
        type: DRAGON_SET_ERROR,
        payload
    }
}

export const addKnight = () => ({
    type: KNIGHT_ADD
})

export const setKnightName = (payload) => ({
    type: KNIGHT_SET_VALUE,
    payload
})

export const deleteKnight = (payload) => ({
    type: KNIGHT_DELETE,
    payload
})

export const setKnightAge = (payload) => ({
    type: KNIGHT_SET_AGE,
    payload
})

export const setKnightError = (payload) => {
    return {
        type: KNIGHT_SET_ERROR,
        payload
    }
}

export const logAction = (payload) => {
    return {
        type: LOG_ACTION,
        payload
    }
}