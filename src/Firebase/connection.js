// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBjQ4pZsWNgUfRV4ahwPz5zVsaUgZzk0bo",
  authDomain: "sso-rai.firebaseapp.com",
  projectId: "sso-rai",
  storageBucket: "sso-rai.appspot.com",
  messagingSenderId: "934017025433",
  appId: "1:934017025433:web:dd4e727e634f4e5f5aff08",
  measurementId: "G-HC2B4EP1W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};