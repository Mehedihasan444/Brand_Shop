import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };


  const UpdateName = (name, imageUrl) => {
    console.log(name, imageUrl);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl,
    });
  };


  
  useEffect(() => {
   
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    Login,
    LogOut,
    loading,
    UpdateName,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
