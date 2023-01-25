// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiu69uu2QKef_TGo62GtBvHm65_9758zI",
  authDomain: "studyperks-c56de.firebaseapp.com",
  projectId: "studyperks-c56de",
  storageBucket: "studyperks-c56de.appspot.com",
  messagingSenderId: "203472479967",
  appId: "1:203472479967:web:a3345cd9000ed646916b6a",
  measurementId: "G-NRNNJBY42M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
