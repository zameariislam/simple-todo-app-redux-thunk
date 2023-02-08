import {toggled } from "../actions"

const updateStatus = (todoId, currentStatus) => {
    return async (dispatch) => {

        const respose = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
                ,
            },
            body: JSON.stringify({

                completed: !currentStatus
            }
            )

        })
        const todo = await respose.json()

        dispatch(toggled(todo?.id))

    }
}
export default updateStatus