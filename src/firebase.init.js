// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
}; */
const firebaseConfig = {
  apiKey: "AIzaSyBAgN2nbVUiF4TTG0wI28kpUSEZ_HJ0UXo",
  authDomain: "bike-mart-c5ea6.firebaseapp.com",
  projectId: "bike-mart-c5ea6",
  storageBucket: "bike-mart-c5ea6.appspot.com",
  messagingSenderId: "437202188158",
  appId: "1:437202188158:web:f4d44e59be2aba04f5a52f",
  measurementId: "G-K351R2FJ4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
