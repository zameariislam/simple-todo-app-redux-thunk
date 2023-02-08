import { added } from "../actions"

const addTodo = (todoText) => {
    return async (dispatch) => {

        const respose = await fetch('http://localhost:9000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                ,
            },
            body: JSON.stringify({
                text: todoText,
                completed: false
            }
            )

        })
        const todo = await respose.json()

        dispatch(added(todo?.text))

    }
}
export default addTodo