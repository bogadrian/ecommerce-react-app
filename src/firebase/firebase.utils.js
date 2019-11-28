import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD3FXVxtQpJgMOhIOXJ28h-rH7blfADZVA',
  authDomain: 'ecommerce-db-ea0b0.firebaseapp.com',
  databaseURL: 'https://ecommerce-db-ea0b0.firebaseio.com',
  projectId: 'ecommerce-db-ea0b0',
  storageBucket: 'ecommerce-db-ea0b0.appspot.com',
  messagingSenderId: '1019311539963',
  appId: '1:1019311539963:web:b7f360b784aa96611b125e'
};

export const createUserDocProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error createing user', err.msg);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
