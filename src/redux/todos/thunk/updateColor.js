import {colorSelected } from "../actions"

const updateColor = (todoId, color) => {
    return async (dispatch) => {

        const respose = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
                ,
            },
            body: JSON.stringify({

                color
            }
            )

        })
        const todo = await respose.json()

        dispatch(colorSelected(todo?.id, todo?.color))

    }
}
export default updateColor