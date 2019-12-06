import ActionShopData from './actions-utilis';
import {
  firestore,
  setBackDataFromFirebase
} from '../../firebase/firebase.utils';

export const startFetch = () => ({
  type: ActionShopData.FETCH_START
});

export const fetchSuccess = data => ({
  type: ActionShopData.FETCH_SUCCESS,
  payload: data
});

export const fetchError = errorMessagge => ({
  type: ActionShopData.FETCH_ERROR,
  payload: errorMessagge
});

export const startFetchAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collection');
    dispatch(startFetch());

    collectionRef
      .get()
      .then(snapshot => {
        const shopData = setBackDataFromFirebase(snapshot);
        dispatch(fetchSuccess(shopData));
      })
      .catch(err => dispatch(fetchError(err.message)));
  };
};
