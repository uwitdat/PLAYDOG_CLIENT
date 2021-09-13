// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUyY8rNEOOptti46JIsXefHyDufio2WVA",
  authDomain: "walki-2740a.firebaseapp.com",
  projectId: "walki-2740a",
  storageBucket: "walki-2740a.appspot.com",
  messagingSenderId: "27219626147",
  appId: "1:27219626147:web:96237617515c4ea7961716",
  measurementId: "G-WEBF0CKQ83"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
export { storage, auth, firestore };
