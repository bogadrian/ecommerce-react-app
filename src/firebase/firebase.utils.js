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

export const setCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newRefDoc = collectionRef.doc();
    batch.set(newRefDoc, obj);
  });

  return await batch.commit();
};

export const setBackDataFromFirebase = snapshotCollection => {
  const transformedData = snapshotCollection.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedData.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
