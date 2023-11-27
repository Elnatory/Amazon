import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";
import { auth, db } from "./firebasse";
import { addDoc, doc } from "firebase/firestore";

export async function register(email, password, displayName) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName }); // Update the user's display name
    return user;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error; 
  }
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}
