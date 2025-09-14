// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB30HU-zvK6KGMsuwScjK0w54uF-nk88yI",
  authDomain: "indept-bfcb8.firebaseapp.com",
  projectId: "indept-bfcb8",
  storageBucket: "indept-bfcb8.firebasestorage.app",
  messagingSenderId: "744558540664",
  appId: "1:744558540664:web:aaccab7319cebd206cfa8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);