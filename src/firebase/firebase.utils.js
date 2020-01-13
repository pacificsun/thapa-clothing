import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBP5YttDevVn6NfS2yDtdxoLc8blCVik58',
  authDomain: 'crwn-db-7b6a0.firebaseapp.com',
  databaseURL: 'https://crwn-db-7b6a0.firebaseio.com',
  projectId: 'crwn-db-7b6a0',
  storageBucket: 'crwn-db-7b6a0.appspot.com',
  messagingSenderId: '970175769331',
  appId: '1:970175769331:web:0de915b6844aabfcc02586',
  measurementId: 'G-6WFCMWRPW9'
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
