import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [users, setUsers] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUsers(user)
                console.log(user)
            });
    };
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    };
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUsers(user)
        })
    }, [])
    return {
        users,
        handleSignOut,
        signInWithGoogle
    }
};
export default useFirebase;