import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';

export const AuthContext = createContext()
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    return signOut(auth)
    
  }
  const googleSingIn = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser)
        setUser(currentUser)
    })
    return () => {
      unsubscribe();
    }
  }, [])


    const authInfo = {
      user,
      createUser,
      signIn,
      logOut,
      googleSingIn,
      githubSignIn,
    };
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProviders;