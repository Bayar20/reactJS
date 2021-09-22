import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC7eHvHD9OXVIEUU1K_KyavzPfhdkhZYaM",
    authDomain: "leaply-nest.firebaseapp.com",
    projectId: "leaply-nest",
    storageBucket: "leaply-nest.appspot.com",
    messagingSenderId: "294575023785",
    appId: "1:294575023785:web:a8cda7dfa764fa86a9abb8"
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth()
export default firebase;