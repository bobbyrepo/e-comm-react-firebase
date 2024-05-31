import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth as authentication } from "../config/firebase.config";

export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    authentication,
    email,
    password
  );
  return userCredential.user;
};

export const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    authentication,
    email,
    password
  );
  return userCredential.user;
};

export const logout = async () => {
  await signOut(authentication);
};
