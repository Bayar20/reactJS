import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAX6ioGkHqQmbygX0yOzrIg_HdCZlk6HlA",
    authDomain: "qr-payment-nest.firebaseapp.com",
    projectId: "qr-payment-nest",
    storageBucket: "qr-payment-nest.appspot.com",
    messagingSenderId: "437306254192",
    appId: "1:437306254192:web:1c2c08e082d2b9445265b5"
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth()
export default firebase;