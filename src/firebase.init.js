// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAB7IiZ3nKZTosIBDlBEyEu7DeKe0WrnFE",
    authDomain: "e-commerce-router.firebaseapp.com",
    projectId: "e-commerce-router",
    storageBucket: "e-commerce-router.appspot.com",
    messagingSenderId: "308940863309",
    appId: "1:308940863309:web:6277a89770cf2661842904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;