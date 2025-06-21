// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmp6E7N4DlOzRpuulLcRgyh1aDbK9wG4Y",
  authDomain: "auth-moha-milon-cbe7f.firebaseapp.com",
  projectId: "auth-moha-milon-cbe7f",
  storageBucket: "auth-moha-milon-cbe7f.firebasestorage.app",
  messagingSenderId: "296344883659",
  appId: "1:296344883659:web:80c1866e11e7f7930ca64e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);