import { all, put, call, takeLatest } from 'redux-saga/effects';

import { clearCart } from './cart-action';
import userActionTypes from '../user-reducer/actions';

export function* emptyCartOnSignOut() {
  yield put(clearCart());
}

export function* onClearCart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, emptyCartOnSignOut);
}

export function* shopSaga() {
  yield all([call(onClearCart)]);
}
