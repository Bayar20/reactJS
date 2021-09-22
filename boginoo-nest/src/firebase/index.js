import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBcVBt9s7yXAFbFD1ym6VfMDzWQaXy8b7I",
    authDomain: "boginooo-nest.firebaseapp.com",
    projectId: "boginooo-nest",
    storageBucket: "boginooo-nest.appspot.com",
    messagingSenderId: "222612424840",
    appId: "1:222612424840:web:f2a1e5798b3b548168f73d"
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth()
export default firebase;