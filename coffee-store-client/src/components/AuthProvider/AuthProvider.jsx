import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null)  
  const createSignUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleSignInUser = () => {
   const provider = new GoogleAuthProvider();
   return signInWithPopup(auth,provider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      if (currenUser) {
        console.log("User is Logged In ", currenUser);
        setUser(currenUser)
      } else {
        console.log("User is Currently Logged Out");
        setUser(null)
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authUsers = {
    createSignUpUser,
    signInUser,
    user,
    GoogleSignInUser
  };

  return (
    <AuthContext.Provider value={authUsers}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
