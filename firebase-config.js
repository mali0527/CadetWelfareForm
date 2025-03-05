// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQZ9RaBLOwdlQw4qTICKSrb5oi2Sdgx_4",
  authDomain: "cadetwelfareform.firebaseapp.com",
  projectId: "cadetwelfareform",
  storageBucket: "cadetwelfareform.appspot.com",  // Fixed storage bucket
  messagingSenderId: "732795642984",
  appId: "1:732795642984:web:ca6fa03208e6ced26907dd",
  measurementId: "G-NZJ3NLM21F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export Firestore for use in script.js
export { db, collection, addDoc };
