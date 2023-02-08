import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filter/action";
import CompleteTask from "./CompleteTask";


const numberofTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return 'No task left'
        case 1:
            return ' 1 task left'
        default:
            return `${no_of_todos} tasks left`


    }
}

export default function Footer() {
    const filters = useSelector(state => state.filters)
    const todos = useSelector(state => state.todos)
    const { status, colors } = filters
    const incompleteTodos = todos.filter(todo => !todo.completed)
    const completeTodos = todos.filter(todo => todo.completed)
    // console.log(colors)


    const dispatch = useDispatch()

    const handleStatus = (status) => {
        dispatch(statusChanged(status))


    }

    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            console.log('color available')
            dispatch(colorChanged(color, 'removed'))

        }
        else {
            dispatch(colorChanged(color, 'added'))
            console.log('color not available')

        }





    }


    return (
        <div className="my-4">

            <div className="mt-4 flex justify-between text-xs text-gray-500">

                <p> {numberofTodos(incompleteTodos.length)} </p>
                <ul className="flex space-x-1 items-center text-xs">
                    <li onClick={() => handleStatus('all')}
                        className={`cursor-pointer ${status === 'all' && 'font-bold'}  `}>All</li>
                    <li>|</li>
                    <li onClick={() => handleStatus('incomplete')}
                        className={`cursor-pointer ${status === 'incomplete' && 'font-bold'}  `}>Incomplete</li>
                    <li>|</li>
                    <li onClick={() => handleStatus('complete')}
                        className={`cursor-pointer ${status === 'complete' && 'font-bold'}  `}>Complete</li>
                    <li></li>
                    <li></li>
                    <li
                        onClick={() => handleColorChange('green')}

                        className={`h-3 w-3 border-2 border-green-500
                    md:hover:bg-green-500 rounded-full cursor-pointer 
                    ${colors.includes('green') && 'bg-green-500'} `}></li>


                    <li
                        onClick={() => handleColorChange('red')}

                        className={`h-3 w-3 border-2 border-red-500 
                    md:hover:bg-red-500 rounded-full 
                    cursor-pointer ${colors.includes('red') && 'bg-red-500'} `}></li>
                    <li
                        onClick={() => handleColorChange('yellow')}
                        className={`h-3 w-3 border-2 border-yellow-500
                    md:hover:bg-yellow-500 rounded-full cursor-pointer   ${colors.includes('yellow') && 'bg-yellow-500'}`}></li>
                </ul>
            </div>
            
            <div>
                <h1  className="text-center mt-2 text-blue-600">Complete Task List Here</h1>


                {
                    completeTodos.length>0 ? 
                   ( completeTodos.map(todo=> <CompleteTask key={todo.id}  todo={todo} />)) :' No Complete Task Available'
                }
           
            </div>
            



        </div>

    );
}
