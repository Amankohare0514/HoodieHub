import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAAGbJLUSAX7sUrjMQuTr9kvquTflptXm4",
  authDomain: "hoodiehub-c4cfa.firebaseapp.com",
  projectId: "hoodiehub-c4cfa",
  storageBucket: "hoodiehub-c4cfa.firebasestorage.app",
  messagingSenderId: "426292522910",
  appId: "1:426292522910:web:ed06a17b57e05b4e5ef08f",
  measurementId: "G-6YSJKH3Q6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
