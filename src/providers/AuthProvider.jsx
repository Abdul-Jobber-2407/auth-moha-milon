import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('current User', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create Provider
 * 3.set value with something (authInfo)
 * 4.[attention Please !!]
 * 5. use the authProvider in the main .jsx
 * 6. access the children inside the authProvider in the main.jsx
 * 7. export AuthProvider
 * 
 */