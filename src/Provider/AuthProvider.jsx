// import { createContext } from "react";
// import { auth } from "../firebase/firebase.config";

import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    // createUser
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInUser
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // github login 
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }


    // logOut
    const logOut = () =>{
        signOut(auth)
        setUser(null)
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

