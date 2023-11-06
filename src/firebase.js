// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmUYVYDvGzd84zZuhcUeDgaPf0Tvvk2vk",
  authDomain: "rj-portfolio-b96dc.firebaseapp.com",
  projectId: "rj-portfolio-b96dc",
  storageBucket: "rj-portfolio-b96dc.appspot.com",
  messagingSenderId: "343898598574",
  appId: "1:343898598574:web:add3bb3488acb42791913f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore()