import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyCK9YY04ao5tAFYB9ckPRM9f438RoEmXEA",
    authDomain: "auth-4c761.firebaseapp.com",
    projectId: "auth-4c761",
    storageBucket: "auth-4c761.appspot.com",
    messagingSenderId: "616433817641",
    appId: "1:616433817641:web:0a7c99ecae87c6d93d2438"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;