import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebasse"; // Corrected typo in the import statement
import { collection, doc, setDoc } from 'firebase/firestore';

export async function register(email, password, displayName) {
  try {
    const { user } = await createUserWithEmailAndPassword( auth,email, password);
    console.log(user.displayName)

    console.log(user)
    // Update the user's display name if provided
   if (displayName) {
      await updateProfile(user, { displayName });
      console.log(user.displayName)

    }

    // Store additional user details in Firestore
    const userCollection = collection(db, 'users'); // Reference to 'users' collection
    await setDoc(doc(userCollection, user.uid), {

      uid: user.uid,

      email: email,
      displayName: displayName || '', // Make sure displayName is not undefined
      createdAt: new Date().toISOString(), // Store creation timestamp
      cart: [], // Initialize an empty cart for the user
    });
    console.log(user.uid)
    return user; // Return the created user
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }

}

// console.log(user.uid)

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}
