import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  //   updateProfile
} from "firebase/auth";
import app from "../Firebase/Firebase.confige";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const Authcontext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const AxiosPublic = useAxiosPublic();
  const auth = getAuth(app);
  //create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign in a user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //update user profile
  const updateUserProfile = (name) => {
    return updateProfile(auth.curentUser, {
      displayName: name,
    });
  };

  //log out a user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser);
      console.log("curentUser", curentUser);
      if (curentUser) {
        const userInfo = {
          email: curentUser.email,
        };
        AxiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem('access-token')
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [AxiosPublic, auth]);

  const AuthInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleLogin,
    updateUserProfile,
  };

  return (
    <Authcontext.Provider value={AuthInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
