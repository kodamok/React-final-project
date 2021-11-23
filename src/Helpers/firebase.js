import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId:,
  appId: ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

//SINGUP
export function signup(email, password) {

  return createUserWithEmailAndPassword(auth, email, password);
}

//SIGN OUT
export function logOut(){
    return signOut(auth)
}

//LOG IN

export function logIn(email, password){

    return signInWithEmailAndPassword(auth, email, password)
}

//Custom Hook for every time user auth changes
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}



