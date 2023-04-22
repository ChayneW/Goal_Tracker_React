import React from 'react'
import Navbar from './component/Navbar'
import Todo from './component/Todo'
import { UserAuth } from './context/AuthContext'
import './index.css'


const style = {
  container : ``,
}


function App() {

    const {user} = UserAuth()
    
    return (
        <>
            <section><Navbar /></section>
            {/* 0B2447  2B3467  009FBD*/}
            <div className={`App h-screen w-screen p-4 bg-gradient-to-b from-[#041C32] to-[#009FBD]`}>
            
            <section className='text-center p-8 px-4'>
              {user ? <h1 className='font-[Poppins] text-white text-5xl'>Good Morning {user.displayName}</h1> : <h1 className='poppins text-white'>Hello, please sign in to gain access!</h1>}
              
            </section>

              <div className={`Container ${style.container} bg-sky-100 max-w-[500px] rounded-md p-4 m-auto shadow-xl`}>
                
                <h3 className={`H3 ${style.heading} font-[Poppins] text-3xl text-center p-2 m-auto justify-center`}>Dashboard:</h3>
                {user ? <Todo /> : <h1 className='font-[Poppins] text-center'>Sign In to see Todos.</h1>}
                
              </div>  
            </div>
        </>        
    )
}

export default App
