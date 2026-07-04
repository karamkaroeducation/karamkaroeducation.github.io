// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrOHsQNKoSEKe4OrZgBhyZ20XyCvCZilI",
  authDomain: "karamkaro-education.firebaseapp.com",
  projectId: "karamkaro-education",
  storageBucket: "karamkaro-education.firebasestorage.app",
  messagingSenderId: "174456078083",
  appId: "1:174456078083:web:9b94f3052a9e515d2bb336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export
export { auth, db, storage };
