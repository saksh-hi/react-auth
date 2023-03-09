// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHeh-jkRKGlmEhvK3AuGMTubIc2tDy4KM",
  authDomain: "my-firstproject-bee12.firebaseapp.com",
  projectId: "my-firstproject-bee12",
  storageBucket: "my-firstproject-bee12.appspot.com",
  messagingSenderId: "667577711317",
  appId: "1:667577711317:web:e854a4702f8e085696405c",
  measurementId: "G-17CFSFSMT2"
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;