// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxGeVlSbsUPRGPxyJ4pFSMzTClw2dr2no",
  authDomain: "tec-para-desenv-web.firebaseapp.com",
  projectId: "tec-para-desenv-web",
  storageBucket: "tec-para-desenv-web.firebasestorage.app",
  messagingSenderId: "355503026185",
  appId: "1:355503026185:web:d6f79081376d4c9342c8d8",
  measurementId: "G-7T99PXCV5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
