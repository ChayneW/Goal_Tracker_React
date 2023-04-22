import React, {useState, useEffect, createContext, useContext} from 'react'
import {auth, db} from '../firebase'

import { 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithPopup, 
    signOut,
    getAdditionalUserInfo,
} from 'firebase/auth'

import { setDoc, doc} from 'firebase/firestore'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({})

    const signIn = async () => {
        console.log('AuthContext -> signIn():')
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            const details = getAdditionalUserInfo(result)
            if (details.isNewUser) {
                console.log('should switch', details.isNewUser)
                setDoc(doc(db, "users", result.user.uid), {saveTodo: [] }, {merge: true})
            }
        })
        .catch ((error) => {
            console.log(error)
        })
    }

    const logOut = () => {
        console.log('AuthContext -> logOut():')
        signOut(auth)
    }


    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(`authContext -> useEffect, currentUser: ${currentUser}`)
            setUser(currentUser)
            // console.log(currentUser.uid)
            console.log('checking count of docs:')
           
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{signIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}


