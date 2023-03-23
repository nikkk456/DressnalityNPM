import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBuiDMVYKrZSyV41nKQ3sFSH96IhI6eiXY",
  authDomain: "dressnality.firebaseapp.com",
  databaseURL: "https://dressnality-default-rtdb.firebaseio.com",
  projectId: "dressnality",
  storageBucket: "dressnality.appspot.com",
  messagingSenderId: "176937255870",
  appId: "1:176937255870:web:e5b2699d53dbba72bb6fef",
  measurementId: "G-FHNEK2S4LG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getDatabase(app);
// const functions = getFunctions();
// const createStripeChcekout = firebase.functions().httpsCallable('createStripeChcekout');

export {app,auth,storage,db};