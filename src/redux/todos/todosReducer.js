import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TITLECHANGED, TOGGLED } from "./actionTypes"
import { initialState } from "./initialState"


const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};

const todosReducer = (state = initialState, action) => {

    switch (action.type) {


        case LOADED:
            return action.payload

        case ADDED:
            return [
                ...state, {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                }
            ]

        case TOGGLED:

            const updateState = state.map(todo => {
                if (todo.id === action?.payload) {
                    return { ...todo, completed: !todo?.completed }
                }
                else {
                    return { ...todo }
                }

            })
            return updateState

        case TITLECHANGED:
            return state.map(todo => {
                const { id, updateTitle } = action.payload
                if (todo.id === id) {
                    return { ...todo, text: updateTitle }
                }
                else {
                    return { ...todo }
                }

            })


        case COLORSELECTED:
            const { id, color } = action?.payload

            const updateColor = state.map(todo => {
                if (todo.id === id) {
                    return { ...todo, color }
                }
                else {
                    return { ...todo }
                }
            })
            return updateColor

        case DELETED:

            return state.filter(todo => todo.id !== action.payload)

        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        case CLEARCOMPLETED:

            return state.filter(todo => !todo.completed)



        default:
            return state

    }

}

export default todosReducer