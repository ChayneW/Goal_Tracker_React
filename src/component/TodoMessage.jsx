import React from "react";
import {FaRegTrashAlt} from 'react-icons/fa'


const style = {
    li: `flex justify-between bg-[#9A208C] rounded-[40px] p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    button: `cursor-pointer flex items-center`
}



// const TodoMessage = ({todo, toggleComplete, deleteTodo}) => {
const TodoMessage = ({todo, deleteTodo}) => {

    console.log('entering TodoMessage:')
    console.log(todo)
    console.log(todo.completed)

    return (
        <li className={style.li}>
            <div className={style.row}>
                <p className="font-[Poppins]">{todo.text}</p>
            </div>
            <button onClick={() => deleteTodo(todo.id)} ><FaRegTrashAlt /></button>
        </li>
    )

}

export default TodoMessage