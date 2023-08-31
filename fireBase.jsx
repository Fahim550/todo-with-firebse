// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe4usaCRxteyFcXjkAoGmnjzjiQac2jF8",
  authDomain: "todo-app-cb25f.firebaseapp.com",
  projectId: "todo-app-cb25f",
  storageBucket: "todo-app-cb25f.appspot.com",
  messagingSenderId: "294713472021",
  appId: "1:294713472021:web:21a9d1ba4e5225368a0a1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);