import { useState } from "react";
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";

import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";
import updateTitle from "../redux/todos/thunk/updateTitle";

export default function Todo({ todo }) {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState()
    const { id, text, completed, color } = todo
    const dispatch = useDispatch()

    const handleStatusChange = (id) => {

        dispatch(updateStatus(id, completed))


    }

    const handleColorChange = (id, color) => {
        dispatch(updateColor(id, color))

    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    const handleBtn = () => {
        setTitle(text)
        console.log('I am from edit btn')
        setEdit(!edit)


    }
    const handleEditText = () => {
        console.log('I am from edit text')
        dispatch(updateTitle(id, title))
        setEdit(!edit)
        console.log(title)

    }

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div className=" relative rounded-full bg-white border-2
             border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(id)}

                    className="opacity-0 absolute rounded-full"
                />
                {
                    completed && <svg
                        className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                }


            </div>

            {
                !edit && <div className={`select-none flex-1 ${completed && 'line-through'} `}>
                    {text}
                </div>
            }
            {
                edit && <div className={`select-none flex-1  pr-3  `}>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" placeholder="Edit title" />

                </div>
            }

            <button onClick={!edit ? handleBtn : handleEditText} >
                {
                    !edit ? 'Edit' : 'Save'
                }

            </button>

            <div onClick={() => handleColorChange(id, 'green')}
                className={` flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer
             border-green-500 hover:bg-green-500  ${color === 'green' && 'bg-green-500'}  `}></div>

            <div onClick={() => handleColorChange(id, 'yellow')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer
             border-yellow-500 hover:bg-yellow-500  ${color === 'yellow' && 'bg-yellow-500'} `}></div>

            <div onClick={() => handleColorChange(id, 'red')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer
             border-red-500   hover:bg-red-500  ${color === 'red' && 'bg-red-500'} `}></div>

            <img
                onClick={() => handleDelete(id)}
                src={cancelImage}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
            />
        </div>
    );
}
