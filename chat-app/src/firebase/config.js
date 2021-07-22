import firebase from 'firebase/app';


import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB6cqaesdSyqmp_ytu85zMLgy2NlSo84X4",
    authDomain: "chat-app-ef650.firebaseapp.com",
    projectId: "chat-app-ef650",
    storageBucket: "chat-app-ef650.appspot.com",
    messagingSenderId: "7374856032",
    appId: "1:7374856032:web:cff07b70da01669d660805",
    measurementId: "G-GBBN2YN5NH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;