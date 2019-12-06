import { takeLatest, all, put, call } from 'redux-saga/effects';
import {
  auth,
  createUserDocProfile,
  googleProvider,
  getCurrentUser
} from '../../firebase/firebase.utils';

import userActionTypes from './actions';
import {
  SignInSuccess,
  SignInFailure,
  SignOutSuccess,
  SignOutFailure,
  SignUpSuccess,
  SignUpFailure
} from './user.action';

export function* getUserSnapshot(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserDocProfile, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInG);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* signInG() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInG);
}

export function* signInE({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* onSignInEmail() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInE);
}

export function* isUserSignedIn() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshot(userAuth);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* checkUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserSignedIn);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(SignOutSuccess());
  } catch (error) {
    yield put(SignOutFailure(error));
  }
}

export function* signOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* signUpGenerator({
  payload: { displayName, email, password }
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    console.log(displayName);
    yield put(SignUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(SignUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getUserSnapshot(user, additionalData);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signUp() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpGenerator);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignIn),
    call(onSignInEmail),
    call(checkUserSession),
    call(signOutStart),
    call(signUp),
    call(onSignUpSuccess)
  ]);
}
