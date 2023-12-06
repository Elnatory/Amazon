// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDYcZV0eHYZ3lIQfZi--vZJgfYJeDaFx4",
  authDomain: "fir-88026.firebaseapp.com",
  projectId: "fir-88026",
  storageBucket: "fir-88026.appspot.com",
  messagingSenderId: "947539259472",
  appId: "1:947539259472:web:f1f9925e12528cdfe92155"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)
