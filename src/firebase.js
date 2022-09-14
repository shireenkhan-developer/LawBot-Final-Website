
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFPEjTqHSjzQRt2RnauXKmjGHzrE-dlDc",
  authDomain: "ai-based-lawyer.firebaseapp.com",
  projectId: "ai-based-lawyer",
  storageBucket: "ai-based-lawyer.appspot.com",
  messagingSenderId: "668743054510",
  appId: "1:668743054510:web:494577066c4fcf30b9693f",
  measurementId: "G-CBFTGK7ZM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;