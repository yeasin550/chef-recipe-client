import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';

export const AuthContext = createContext()
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
     setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
     setLoading(true);
    return signOut(auth)
    
  }
  const googleSingIn = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
  }
  const updateProfile = () => {
    return updateProfile(auth.user)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
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
      loading,
      updateProfile,
    };
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProviders;