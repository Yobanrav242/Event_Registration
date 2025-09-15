// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKQCC54tPYv0YyflVHodf6rxUoNtLyGHA",
  authDomain: "interdeptfunction.firebaseapp.com",
  projectId: "interdeptfunction",
  storageBucket: "interdeptfunction.firebasestorage.app",
  messagingSenderId: "59894866268",
  appId: "1:59894866268:web:1284f1b1116335b4cae199",
  measurementId: "G-9LB9E8HJQ2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);