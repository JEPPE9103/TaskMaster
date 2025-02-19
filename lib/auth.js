import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

// Registrera användare
export const register = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return "User registered successfully";
  } catch (error) {
    return error.message;
  }
};

// Logga in användare
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return "Login successful";
  } catch (error) {
    return error.message;
  }
};

// Logga ut användare
export const logout = async () => {
  try {
    await signOut(auth);
    return "User logged out";
  } catch (error) {
    return error.message;
  }
};
