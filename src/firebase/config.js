// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgoiEdFyzmQpCFr2U0vFwmxFlqsCiLth8",
  authDomain: "react-cursos-7fbcf.firebaseapp.com",
  projectId: "react-cursos-7fbcf",
  storageBucket: "react-cursos-7fbcf.appspot.com",
  messagingSenderId: "435905800149",
  appId: "1:435905800149:web:99b2d798da9166edf2ff5c",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
