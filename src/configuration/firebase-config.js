import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWP2uQ8VQniRT8w5JWznfZiv1Qhp568lY",
  authDomain: "basmag.firebaseapp.com",
  projectId: "basmag",
  storageBucket: "basmag.appspot.com",
  messagingSenderId: "438302034190",
  appId: "1:438302034190:web:4ff750ad089929cb6d2f5f",
  measurementId: "G-2R5QV7Y6JZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
