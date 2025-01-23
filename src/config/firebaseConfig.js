// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg66VmAvCe_NKQ8ZnBz4FLHULvSuDtW7M",
  authDomain: "project-1701925568833932037.firebaseapp.com",
  projectId: "project-1701925568833932037",
  storageBucket: "project-1701925568833932037.firebasestorage.app",
  messagingSenderId: "905934017401",
  appId: "1:905934017401:web:3030be81906440c6f555a8",
  measurementId: "G-DQT39WH1HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // se cambia getAnalityc por getFirestore que es lo que utilizamos como base de datos