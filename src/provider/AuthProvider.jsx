import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const userLogout = () => {
        return signOut(auth)
    };

    const LoginUser = (email , password)=>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }
            else {
                setUser(null)
            }
        })

        return () => {
            unSubscribe()
        }
    }, [])
    const UserInfo = {
        user, setUser, loader, setLoader,
        createUser,
        userLogout,LoginUser
    }
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;