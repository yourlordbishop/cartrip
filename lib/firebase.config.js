// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cartrip-ff0bb.firebaseapp.com",
  projectId: "cartrip-ff0bb",
  storageBucket: "cartrip-ff0bb.appspot.com",
  messagingSenderId: "991422167190",
  appId: "1:991422167190:web:df69b904a9ad62c6d7aab7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore(app);

export { db }