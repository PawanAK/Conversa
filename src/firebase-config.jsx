// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA4dGOUSKsPoJpds9CHheaAZI9L9iHoXDQ",
  authDomain: "conversa-a59ca.firebaseapp.com",
  projectId: "conversa-a59ca",
  storageBucket: "conversa-a59ca.appspot.com",
  messagingSenderId: "301579486258",
  appId: "1:301579486258:web:a68811ee5088639b9fa82b",
  measurementId: "G-R8EXB5HX0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
