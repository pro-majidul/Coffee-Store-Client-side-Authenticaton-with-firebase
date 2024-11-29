// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3PqyRx3Wl7g7NNokuyF2G_jB__Zs5a3I",
    authDomain: "coffee-store-52dca.firebaseapp.com",
    projectId: "coffee-store-52dca",
    storageBucket: "coffee-store-52dca.firebasestorage.app",
    messagingSenderId: "717247701083",
    appId: "1:717247701083:web:c03a2ca28e2a8bd925df7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);