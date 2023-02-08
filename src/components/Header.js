import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { allComplete, clearCompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

export default function Header() {

    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        e.preventDefault()
        const form = e.target
        const todo = form[0].value
        dispatch(addTodo(todo))

        form.reset()




    }

    const handleCompleteAll = () => {
        dispatch(allComplete())
    }

    const handleClearCompleted = () => {
        dispatch(clearCompleted())

    }

    return (
        <div>
            <form onSubmit={handleAddTodo} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span onClick={handleCompleteAll} >Complete All Tasks</span>
                </li>
                <li onClick={handleClearCompleted} className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}
