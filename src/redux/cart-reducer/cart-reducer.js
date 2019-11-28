import ActionCart from './actions';
import {
  addItemToCart,
  clearItemFromReducer,
  decreaseQuantityFromReducer
} from './cart-utils';

const INITIAL_STATE = {
  hidden: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionCart.TOGGLE_STATE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ActionCart.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case ActionCart.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemFromReducer(state.cartItems, action.payload)
      };
    case ActionCart.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantityFromReducer(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
export default cartReducer;
