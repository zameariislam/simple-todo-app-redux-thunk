import { colorSelected, titleChanged } from "../actions"

const updateTitle = (todoId, updateText) => {
    return async (dispatch) => {

        const respose = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
                ,
            },
            body: JSON.stringify({

                text: updateText
            }
            )

        })
        const todo = await respose.json()

        dispatch(titleChanged(todo?.id, todo?.text))

    }
}
export default updateTitle