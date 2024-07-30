// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjIhVD4q99sqtnWVCRcRKdq2XgYBFO_l0",
  authDomain: "fir-project-40c70.firebaseapp.com",
  projectId: "fir-project-40c70",
  storageBucket: "fir-project-40c70.appspot.com",
  messagingSenderId: "311393081568",
  appId: "1:311393081568:web:a722ca2394738c3ce9d885"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);