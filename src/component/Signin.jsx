import React from 'react'
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../context/AuthContext'

const Signin = () => {

    const {user, signIn} = UserAuth()

    const handleSignIn = async () => {
        try {
            await signIn(user)
            console.log(`Singin.jsx -> finished authen.`)
        } catch (error) {
            console.log(`Signin.jsx -> handleSignin error: ${error}`)
        }
    }

    return (
    <div>
        <GoogleButton onClick={handleSignIn}/>

    </div>
    )
}

export default Signin