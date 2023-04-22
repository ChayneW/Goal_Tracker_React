import React, {useState, useEffect} from 'react'
import Signin from './Signin'
import Logout from './Logout'
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {

  const {user} = UserAuth()

  return (
    <div className='w-full bg-[#041C32] h-20 flex justify-between items-center p-4'>
        <h1 className='font-[Poppins] text-white'>Todo</h1>
        {user ? console.log(user, user.uid) : console.log('no user?')}
        {user ? <Logout /> : <Signin /> }
        
    </div>
  )
}

export default Navbar