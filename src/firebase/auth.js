import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebasse";



export function register(email,password){
   return createUserWithEmailAndPassword(auth,email,password)
}

export function login(email,password){

   return signInWithEmailAndPassword(auth,email,password)
}

export function logout(){
   return signOut(auth)
}