// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqTe7HLnnd9qyc7M02iRsd7EfgU120PX4",
  authDomain: "potofolio-afdal.firebaseapp.com",
  projectId: "potofolio-afdal",
  storageBucket: "potofolio-afdal.appspot.com",
  messagingSenderId: "208071715264",
  appId: "1:208071715264:web:21a262ac6365d688b8c025",
  measurementId: "G-9Z7EP0GVFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
