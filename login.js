import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCPqdKnaeMabPuv4UgH73bF6cRus2hkoDA",
    authDomain: "dashboard-87fcf.firebaseapp.com",
    projectId: "dashboard-87fcf",
    storageBucket: "dashboard-87fcf.appspot.com",
    messagingSenderId: "176565386775",
    appId: "1:176565386775:web:ef63b04468512a0ad22652",
    measurementId: "G-5L473D3KV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

// Check if the user is already logged in
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in
        const userEmail = user.email;
        const userPassword = user.uid; // Using UID as a placeholder for password

        // Store user credentials in local storage
        localStorage.setItem('username', userEmail);
        localStorage.setItem('password', userPassword); // Ideally, don't store passwords like this

        // Redirect to login.html
        window.location.href = "login.html";
    } else {
        // User is not signed in, check local storage for first visit
        if (!localStorage.getItem('username')) {
            alert("Welcome! Please sign in with Google.");
        }
    }
});

// Google login functionality
const googleLogin = document.getElementById("Google");
googleLogin.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            // Store user information
            localStorage.setItem('username', user.email);
            localStorage.setItem('password', user.uid); // Using UID as a placeholder for password

            // Redirect to login.html
            window.location.href = "login.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error("Error during Google Sign In: ", errorMessage);
        });
});