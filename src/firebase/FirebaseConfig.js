// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfPxok_UghQ5P9Bb2ePLD9e3CXw2TD7vs",
  authDomain: "adidas-60c02.firebaseapp.com",
  projectId: "adidas-60c02",
  storageBucket: "adidas-60c02.firebasestorage.app",
  messagingSenderId: "465063608052",
  appId: "1:465063608052:web:d3548faef738887652e8a1",
  measurementId: "G-8NBLV1ZR7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);