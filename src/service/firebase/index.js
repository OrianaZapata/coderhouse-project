// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXE_XPxkIYpQVM2dscXBi9vz2jfypmu3c",
  authDomain: "backendcoderhousereact.firebaseapp.com",
  projectId: "backendcoderhousereact",
  storageBucket: "backendcoderhousereact.appspot.com",
  messagingSenderId: "465658958197",
  appId: "1:465658958197:web:e56057d71b7a6f321dc33c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)