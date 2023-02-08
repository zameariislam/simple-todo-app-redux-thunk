import { loaded } from "../actions"

const fetchTodos = async (dispatch) => {

    const respose = await fetch('http://localhost:9000/todos')
    const todos = await respose.json()

    dispatch(loaded(todos))

}
export default fetchTodos