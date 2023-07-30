// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsM1XoRMMvyfz8EQkO9hcyTY05xQgV1kw",
    authDomain: "react-auth-d402b.firebaseapp.com",
    projectId: "react-auth-d402b",
    storageBucket: "react-auth-d402b.appspot.com",
    messagingSenderId: "817106338871",
    appId: "1:817106338871:web:c6dc34acee75e10fe56bb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


export default auth;
