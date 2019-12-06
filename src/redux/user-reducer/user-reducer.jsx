import userActionTypes from './actions';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      };
    case userActionTypes.SIGNI_IN_FAILURE:
    case userActionTypes.SIGNI_OUT_FAILURE:
    case userActionTypes.SIGNI_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
