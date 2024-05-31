// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvMlT6PUKj0QVdzYPe9Zmsj3YLGoxZNsY",
  authDomain: "bobby2-dec84.firebaseapp.com",
  projectId: "bobby2-dec84",
  storageBucket: "bobby2-dec84.appspot.com",
  messagingSenderId: "852009013863",
  appId: "1:852009013863:web:ec0366018cb8209229bac2",
  measurementId: "G-LFJ9R8H3ML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Firestore instance
export const db = getFirestore(app);

// Get Firebase Auth instance
export const auth = getAuth(app);
