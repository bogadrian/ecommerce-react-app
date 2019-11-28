export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(item => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItemFromReducer = (cartItems, item) => {
  return cartItems.filter(cartItem => cartItem.id !== item.id);
};

export const decreaseQuantityFromReducer = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== item.id);
  }
  return cartItems.map(itemToDecrease =>
    itemToDecrease.id === item.id
      ? { ...itemToDecrease, quantity: itemToDecrease.quantity - 1 }
      : itemToDecrease
  );
};
