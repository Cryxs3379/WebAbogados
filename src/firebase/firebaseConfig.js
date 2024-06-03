// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDngTaAnHqwKowb86YJjWcRUMftZWhfMk",
  authDomain: "react-86896.firebaseapp.com",
  projectId: "react-86896",
  storageBucket: "react-86896.appspot.com",
  messagingSenderId: "272242780003",
  appId: "1:272242780003:web:072c0ce41dcbeb7ea21556"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
