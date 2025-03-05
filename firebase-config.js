// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQZ9RaBLOwdlQw4qTICKSrb5oi2Sdgx_4",
  authDomain: "cadetwelfareform.firebaseapp.com",
  projectId: "cadetwelfareform",
  storageBucket: "cadetwelfareform.firebasestorage.app",
  messagingSenderId: "732795642984",
  appId: "1:732795642984:web:ca6fa03208e6ced26907dd",
  measurementId: "G-NZJ3NLM21F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
