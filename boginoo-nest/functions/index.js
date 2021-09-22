const admin = require('firebase-admin')
const functions = require('firebase-functions');
admin.initializeApp();
const db = admin.firestore()

exports.listenFirestore = functions.firestore
    .document('urls/{id}')
    .onCreate(async (snap) => {
    
    const { uid, createdAt, originalUrl } = snap.data();

    await db.doc(`users/${ uid }/history/${ snap.id }`).set({
        originalUrl,
        createdAt,
    })

});

// var serviceAccount = require('/Users/bayar/Downloads/boginooo-nest-firebase-adminsdk-agzpz-e82dcc68c6.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// admin.auth().listUsers().then((users) => {
//     admin
//         .auth()
//         .deleteUsers(users.users.map(({ uid }) => uid))
//         .then(() => {
//             console.log('Successfully deleted users');
//         })
//         .catch((error) => {
//             console.log('Error deleting user:', error);
//         });
// })
