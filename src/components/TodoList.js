import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const filters = useSelector(state => state.filters)
    const incompleteTodos = todos.filter(todo =>! todo.completed)
    // console.log(incompleteTodos)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchTodos)

    }, [dispatch])




    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                incompleteTodos.length > 0 &&
                incompleteTodos
                    .filter(todo => {
                        const { status } = filters
                        switch (status) {
                            case 'complete':
                                return todo.completed
                            case 'incomplete':
                                return !todo.completed
                            default:
                                return true
                        }

                    })
                    .filter(todo => {
                        const { colors } = filters
                        if (colors.length > 0) {
                            return colors.includes(todo?.color)



                        }
                        else {
                            return true
                        }



                    })


                    .map(todo => <Todo key={todo.id} todo={todo} />)
            }


        </div>
    );
}
