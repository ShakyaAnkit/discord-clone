import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE5dYL-YLal1wp4Bi4u3AQDZ-XFRSsYpI",
    authDomain: "discord-clone-ee17e.firebaseapp.com",
    projectId: "discord-clone-ee17e",
    storageBucket: "discord-clone-ee17e.appspot.com",
    messagingSenderId: "1075005011080",
    appId: "1:1075005011080:web:553f13d74240edda291b3d",
    measurementId: "G-6HB7HF4PCG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;