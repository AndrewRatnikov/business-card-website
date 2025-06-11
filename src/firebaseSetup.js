// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkXXfDO25BhSvL9BlFtrMVFa2XpFjh1jc",
  authDomain: "ratnikovastrateg.firebaseapp.com",
  projectId: "ratnikovastrateg",
  storageBucket: "ratnikovastrateg.firebasestorage.app",
  messagingSenderId: "897637111418",
  appId: "1:897637111418:web:20aee21deb5b03f71b0dc3",
  measurementId: "G-DWVEHWJSCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
