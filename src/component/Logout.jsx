import React from 'react'
import { UserAuth } from '../context/AuthContext'


const Logout = () => {

    const {user, logOut} = UserAuth()

    const handleLogOut = async () => {
      try {
        await logOut(user)
      } catch (error) {
        console.log(`Logout -> handleLogOut error: ${error}`)
      }
    }

    return (
      <div className='text-center justify-between'>
        <h1 className='font-[Poppins] text-white' >Welcome: {user.displayName}</h1>
        <h3 className='font-[Poppins] text-white'>{user.email}</h3>
        <button onClick={handleLogOut} className='font-[Poppins] text-white'>Log Out</button>
      </div>

    )
}

export default Logout