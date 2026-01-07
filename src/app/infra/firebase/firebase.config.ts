// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD8W3h6esQGpvANQ3Wzgsl_Rxc97oS_Yso",
  authDomain: "byte-bank-caf24.firebaseapp.com",
  projectId: "byte-bank-caf24",
  storageBucket: "byte-bank-caf24.firebasestorage.app",
  messagingSenderId: "152856783354",
  appId: "1:152856783354:web:9eec3f1991c693e46b9c43",
  measurementId: "G-X4NYFSHMX4"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);