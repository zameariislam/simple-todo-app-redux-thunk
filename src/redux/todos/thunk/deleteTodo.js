import {  deleted } from "../actions"

const deleteTodo = (todoId) => {
    return async (dispatch) => {

        const respose = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'DELETE',


        })
       
        dispatch(deleted(todoId))

    }
}
export default deleteTodo