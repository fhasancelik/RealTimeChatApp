import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA0mtselqUvU0ioOBPTXMlanyfNbERjSvI",
    authDomain: "mymy-583a4.firebaseapp.com",
    projectId: "mymy-583a4",
    storageBucket: "mymy-583a4.appspot.com",
    messagingSenderId: "840954750975",
    appId: "1:840954750975:web:fe8f1bb306024a57b7e9ca"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();