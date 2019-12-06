import userActionTypes from './actions';

export const SignInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const SignInFailure = errorMessage => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage
});
export const onSignInEmail = passwordAndEmail => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: passwordAndEmail
});

export const onGoogleSignIn = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});

export const SignOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});

export const SignOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const SignOutFailure = error => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const SignUp = objFields => ({
  type: userActionTypes.SIGN_UP_START,
  payload: objFields
});

export const SignUpSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const SignUpFailure = error => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error
});
