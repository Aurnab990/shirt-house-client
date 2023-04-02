// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeAJ7FZ9mZ1ch_x3kjFYwcUUmh3sDoRd0",
  authDomain: "ecomerce-desivibes.firebaseapp.com",
  projectId: "ecomerce-desivibes",
  storageBucket: "ecomerce-desivibes.appspot.com",
  messagingSenderId: "554033829945",
  appId: "1:554033829945:web:13bd2cf038822226e4d5e8",
  measurementId: "G-JP5X7Q0SW8",
};
//For hosting: npm install -g firebase-tools

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;