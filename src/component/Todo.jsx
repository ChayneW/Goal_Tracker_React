import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import {doc, onSnapshot, updateDoc} from 'firebase/firestore'
import TodoForm from './TodoForm'
import TodoMessage from './TodoMessage'
import { UserAuth } from '../context/AuthContext'

const today = new Date().toLocaleDateString()
console.log(today)

const Todo = () => {

    console.log('Entering Todo.jsx:')

    const [todos, setTodos] = useState([])

    const {user} = UserAuth()

    const userRef = doc(db, 'users', `${user.uid}`)
    console.log(user.displayName)
    console.log(user.email)

    // Read db data:
    useEffect(() => {

      // suppose to show an array, so mapping can access obj data:
      onSnapshot(doc(db, 'users', `${user?.uid}`), (doc) => {
        setTodos(doc.data()?.saveTodo)
      })

    }, [user?.uid])
  

    // delete db data:
    const deleteTodo = async (passID) => {
      // console.log(passID)

      try {
        const result = todos.filter((item) => item.id !== passID)
        // console.log(result)
        await updateDoc(userRef, {
          saveTodo: result,
        })

      }
      catch(error) {
        console.log(error)
      }

    }

    return (
        <div className=''> 
          <section className='flex justify-between py-4'>
            <h2 className='font-[Poppins]'>Date: {today}</h2>
            {todos.length > 0 ? <h2 className='font-[Poppins]'>Items Left: {todos.length}</h2> : <h2>Let's crush some goals!</h2>}
          </section>

          <TodoForm />
          <ul>
            {todos && todos.map((todo, index) => (
              <TodoMessage key={index} todo={todo} deleteTodo={deleteTodo}/>

            ))}
            </ul>
        </div>
    )
}

export default Todo