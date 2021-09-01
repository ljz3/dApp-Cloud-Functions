// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage"
import "firebase/firestore"
import "firebase/functions"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkR3C923XnOOhxsaaljCRwjw83mfC-N28",
  authDomain: "dapp-backend-basics.firebaseapp.com",
  projectId: "dapp-backend-basics",
  storageBucket: "dapp-backend-basics.appspot.com",
  messagingSenderId: "370196652618",
  appId: "1:370196652618:web:fa06eec06bfcd4cafabcb3",
  measurementId: "G-9VPT3MQT35"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const storage = firebase.storage();
export const auth = app.auth();
export default app;