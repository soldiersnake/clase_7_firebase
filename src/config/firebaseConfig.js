// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Tu credenciales AQUI
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // se cambia getAnalityc por getFirestore que es lo que utilizamos como base de datos
