import { LOGIN, LOGOUT } from "../store/actions/actions";
import accountReducer from "../store/reducers/accountReducer";

//Project imports

import config from "../config";
import { createContext, useEffect, useReducer, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

initializeApp(config.firebase);

const initialState = {
  isLoggedIN: false,
  isInitialized: true,
  user: null,
};

const auth = getAuth();
export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  console.log(userName);
  console.log(state);
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIN: true,
              user: {
                id: user.uid,
                email: user.email,
                name: user.displayName,
              },
            },
          });
        } else {
          console.log(user);
          dispatch({
            type: LOGOUT,
          });
        }
      }),
    [dispatch]
  );

  const firebaseEmailPasswordSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential.user);
      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIN: true,
          user: {
            id: userCredential.user.uid,
            email: userEmail,
            name: userName,
          },
        },
      });
    });
  };

  const firebaseRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
        })
          .then(() => {
           console.log("name updated")
          })
          .catch((error) => {
            console.log(error)
          });
        dispatch({
          type: LOGIN,
          payload: {
            isLoggedIN: true,
            user: {
              id: userCredential.user.uid,
              email: userCredential.user.email,
              name: userCredential.user.displayName,
            },
          },
        });
      }
    );
  };

  const resetPassword = (email, password) => {
    auth.sendPasswordResetEmail(email, password);
  };

  const logout = () => auth.signOut();

  return (
    <FirebaseContext.Provider
      value={{
        ...state,
        logout,
        firebaseEmailPasswordSignIn,
        firebaseRegister,
        resetPassword,
        userName,
        setuserName,
        userEmail,
        setuserEmail,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
