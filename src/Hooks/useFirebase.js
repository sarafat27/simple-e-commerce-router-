import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../firebase.init';

const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [userGoogle, setUser] = useState({})

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }
    useEffect(() => {
        onAuthStateChanged(auth, userGoogle => {
            setUser(userGoogle)
        })
    }, [])
    return { userGoogle, signInWithGoogle, handleSignOut }
};

export default useFirebase;