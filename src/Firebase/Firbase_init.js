
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhSoKdh1gr5ZomI97zpNRfKhxwxjJXZZ8",
  authDomain: "assiment9-b.firebaseapp.com",
  projectId: "assiment9-b",
  storageBucket: "assiment9-b.firebasestorage.app",
  messagingSenderId: "721941065281",
  appId: "1:721941065281:web:4327abbb072c26890560c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;