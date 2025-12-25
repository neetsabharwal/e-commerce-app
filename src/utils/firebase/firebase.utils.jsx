// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVgaksa6-jviuCnAQmMbnMs7wkmSMAYpg",
  authDomain: "e-commerce-db-a0359.firebaseapp.com",
  projectId: "e-commerce-db-a0359",
  storageBucket: "e-commerce-db-a0359.firebasestorage.app",
  messagingSenderId: "712964758700",
  appId: "1:712964758700:web:17b1002c56cef298b4d309",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userRefDoc = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userRefDoc);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRefDoc, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userRefDoc;
};
