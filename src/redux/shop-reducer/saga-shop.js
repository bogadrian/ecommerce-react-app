import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  setBackDataFromFirebase
} from '../../firebase/firebase.utils';

import { fetchSuccess, fetchError } from './shop-actions';

import ActionShopData from './actions-utilis';

export function* fetchCollectionStartAsync() {
  try {
    const collectionRef = firestore.collection('collection');
    const snapshot = yield collectionRef.get();
    const dataShop = yield call(setBackDataFromFirebase, snapshot);
    yield put(fetchSuccess(dataShop));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}
export function* fetchCollectionStart() {
  yield takeLatest(ActionShopData.FETCH_START, fetchCollectionStartAsync);
}
