// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChYUUo2TbCOMk65Ls_1CahD1K1Y-OZUFo",
    authDomain: "cinemagpt-e0e9b.firebaseapp.com",
    projectId: "cinemagpt-e0e9b",
    storageBucket: "cinemagpt-e0e9b.appspot.com",
    messagingSenderId: "303702112333",
    appId: "1:303702112333:web:d50811685de1effe504404",
    measurementId: "G-QG679LDXCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();