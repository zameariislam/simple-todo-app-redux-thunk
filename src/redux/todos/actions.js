import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TITLECHANGED, TOGGLED } from "./actionTypes"



export const loaded = (todos) => {

    return {
        type: LOADED,
        payload: todos
    }


}

export const added = (todoText) => {

    return {
        type: ADDED,
        payload: todoText
    }


}


export const toggled = (id) => {

    return {
        type: TOGGLED,
        payload: id
    }


}


export const titleChanged = (id, updateTitle) => {

    return {
        type: TITLECHANGED,
        payload: {
            id,
             updateTitle
        }
    }


}

export const colorSelected = (todoId, color) => {

    return {
        type: COLORSELECTED,
        payload: {
            id: todoId,
            color
        }
    }


}

export const deleted = (todoId) => {

    return {
        type: DELETED,
        payload: todoId
    }


}

export const allComplete = () => {

    return {
        type: ALLCOMPLETED

    }


}

export const clearCompleted = () => {

    return {
        type: CLEARCOMPLETED

    }


}