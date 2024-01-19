// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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