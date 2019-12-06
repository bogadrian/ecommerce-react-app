import ActionShopData from './actions-utilis';

const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionShopData.FETCH_START:
      return {
        ...state,
        isFetching: true
      };
    case ActionShopData.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: action.payload
      };
    case ActionShopData.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
