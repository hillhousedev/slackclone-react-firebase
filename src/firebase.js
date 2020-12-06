import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAdh8yLF9GqMa3WBK1ZUpesQHvKRHoiEps",
    authDomain: "slack-clone-with-reactfirebase.firebaseapp.com",
    projectId: "slack-clone-with-reactfirebase",
    storageBucket: "slack-clone-with-reactfirebase.appspot.com",
    messagingSenderId: "259684472670",
    appId: "1:259684472670:web:6e7f4d0ffcdb1d8bfba1cf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {  auth, provider };
export default db;