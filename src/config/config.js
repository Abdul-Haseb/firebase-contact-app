// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// first we have to import the getFireStore from the firebase to access the database store we have
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCuzFl79VZE-x8e0ioWNLpXBM2PvfKzIu8',
  authDomain: 'fir-contact-app-ba00c.firebaseapp.com',
  projectId: 'fir-contact-app-ba00c',
  storageBucket: 'fir-contact-app-ba00c.appspot.com',
  messagingSenderId: '843247679359',
  appId: '1:843247679359:web:10edc1aeba81465625cc4a',
  measurementId: 'G-NDXQ694SRH',
};

// export the app
export const app = initializeApp(firebaseConfig);

// setUp the database
export const database = getFirestore(app);
