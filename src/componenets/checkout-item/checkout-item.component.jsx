import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCheckout,
  decreaseQuantity,
  addItem
} from '../../redux/cart-reducer/cart-action';
import './checkout-item.style.scss';



const CheckoutItem = ({ item, clearItem, decreaseQuantity, addItem }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCheckout(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
