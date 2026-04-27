// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
