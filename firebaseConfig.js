import {initializeApp, getApps, getApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbiOr1D00l8DFWsWDI1Z9-jNix2wDklVU',
  authDomain: 'test-a6c23.firebaseapp.com',
  projectId: 'test-a6c23',
  storageBucket: 'test-a6c23.appspot.com',
  messagingSenderId: '232232753516',
  appId: '1:232232753516:android:0c5aa9c7dfa4f2879afb49',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app); // Add Firestore

export {auth, db}; // Export both auth and db
