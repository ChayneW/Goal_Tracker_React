import React, {useState} from 'react'
import {GrChapterAdd} from "react-icons/gr"
import { db } from '../firebase'
import { doc, arrayUnion, updateDoc } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import { generate } from 'short-uuid'


const short = generate()
console.log('printing short uuid:')
console.log(short)

const generateShort = () => {
  let newId = generate()
  console.log('printing short uuid:')
  // console.log(newId)
  return newId
}

const TodoForm = () => {

    // useState for form data:
    const [input, setInput] = useState('')

    const {user} = UserAuth()

    const todoRef = doc(db, 'users', `${user?.uid}`)

    // console.log(`TodoForm.jsx -> todoRef:`)
    // console.log(todoRef)


    const sendTodo = async (e) => {
      console.log('triggered TodoForm.jsx -> sendTodo:')
      e.preventDefault()
      console.log(input)

      if (user?.uid) {
        await updateDoc(todoRef, {
          saveTodo: arrayUnion({
            id: generateShort(),
            text: input,
            completed: false,
          })
        })
      }
      else {
        console.log('something went wrong')
      } 
    }


    return (
      <div className='Form py-4'>
          <form className={`flex justify-between`} onSubmit={sendTodo}>
              <input value={input} onChange={(e) => setInput(e.target.value)} className={`border p-2 w-full`} type="text" placeholder='Add Todo:' />
              <button className={`border ml-4 rounded-lg`} type='submit'><GrChapterAdd size={40}/></button>
          </form>
      </div>
    )
}


export default TodoForm