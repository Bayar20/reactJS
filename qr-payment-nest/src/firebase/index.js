import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "qr-payment-hop.firebaseapp.com",
    projectId: "qr-payment-hop",
    storageBucket: "qr-payment-hop.appspot.com",
    messagingSenderId: "751288886409",
    appId: "1:751288886409:web:5c43923d2b83a5c5801258"
  };

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth()
export default firebase;