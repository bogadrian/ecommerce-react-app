import ActionCart from './actions';

export const toggleStateHidden = () => ({
  type: ActionCart.TOGGLE_STATE_HIDDEN
});

export const addItem = item => ({
  type: ActionCart.ADD_ITEM,
  payload: item
});

export const clearItemFromCheckout = item => ({
  type: ActionCart.CLEAR_ITEM,
  payload: item
});

export const decreaseQuantity = item => ({
  type: ActionCart.DECREASE_QUANTITY,
  payload: item
});

export const increaseQuantity = item => ({
  type: ActionCart.INCREASE_QUANTITY,
  payload: item
});

export const clearCart = () => ({
  type: ActionCart.CLEAR_CART
})