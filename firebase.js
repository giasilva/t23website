// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTAqVWuqqaEaa3jcjtoVK-UEB2tMmNtPA",
    authDomain: "t23website.firebaseapp.com",
    projectId: "t23website",
    storageBucket: "t23website.appspot.com",
    messagingSenderId: "30855225277",
    appId: "1:30855225277:web:2d3ae19ea360c07d1cbcd4",
    measurementId: "G-EL3E583KQN"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

document.addEventListener("DOMContentLoaded", function() {
    const signupButton = document.getElementById('signupButton');
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    logoutButton.addEventListener('click',(e) => {
        e.preventDefault();
        logout(); // Call the logout function
    });

    loginButton.addEventListener('click',(e) => {
        e.preventDefault();
        login(); // Call the login function
    });

    // Attach event listener to the signup button
    signupButton.addEventListener('click',(e) => {
        e.preventDefault(); // Prevent default form submission behavior

        var email = emailInput.value;
        var password = passwordInput.value;

        // Validate input fields
        if (!validate(email, password)) {
            return; // Exit function if validation fails
        }

        // Sign up user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('User created successfully');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/email-already-in-use') {
                    alert('Email address is already in use.');
                } else {
                    alert(errorMessage);
                }
            });
    });
    
    // Add event listener for the "keypress" event on the password input field
    passwordInput.addEventListener('keypress', function(event) {
        // Check if the Enter key is pressed (keyCode 13)
        if (event.keyCode === 13) {
            // Call the login function
            login();
        }
    });

    // Logout user
    function logout() {
        signOut(auth).then(() => {
            // Sign-out successful
            alert('User logged out successfully');
        }).catch((error) => {
            // An error happened
            alert('An error occurred while logging out');
        });
    }

    // Login user with email and password
    function login() {
        var email = emailInput.value;
        var password = passwordInput.value;

        // Validate input fields
        if (!validate(email, password)) {
            return; // Exit function if validation fails
        }

        // Sign in user with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('User logged in successfully');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/invalid-credential') {
                    alert('Wrong password and/or e-mail.')
                } else {
                    alert(errorMessage);
                }
            });
    }

    // onAuthStateChanged listener
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            const uid = user.uid;
            console.log("User is signed in with UID:", uid);
            // Hide login and signup buttons
            loginButton.style.display = 'none';
            signupButton.style.display = 'none';
            emailInput.style.display = 'none'; // Hide email input
            passwordInput.style.display = 'none'; // Hide password input
            
            // Show logout button
            logoutButton.style.display = 'block';

        } else {
            // User is signed out
            console.log("User is signed out");
            // Show login and signup buttons
            loginButton.style.display = 'block';
            signupButton.style.display = 'block';
            emailInput.style.display = 'block'; // Show email input
            passwordInput.style.display = 'block'; // Show password input
        
            // Hide logout button
            logoutButton.style.display = 'none';
        }
    });

    // Validate input fields 
    function validate(email, password) {
        if (email.length < 4) {
            alert('Please enter a valid email address.');
            return false;
        } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
            alert('Please enter a valid email address.');
            return false;
        }
        if (password.length < 6) {
            alert('Please enter a password with at least 6 characters.');
            return false;
        } else if (password.length > 25) {
            alert('Please enter a password with at most 25 characters.');
            return false;
        }

        return true;
    }
});
