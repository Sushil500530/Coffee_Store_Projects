// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANZvHhGMndopyTEWeo_z86wDSKkBALVas",
  authDomain: "coffee-store-9fb90.firebaseapp.com",
  projectId: "coffee-store-9fb90",
  storageBucket: "coffee-store-9fb90.appspot.com",
  messagingSenderId: "271197620388",
  appId: "1:271197620388:web:a117a59bce8cbea6aefe31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

