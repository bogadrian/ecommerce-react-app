import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart-reducer/selectors';
import './checkout.style.scss';

import CheckoutItem from '../../componenets/checkout-item/checkout-item.component';
import CheckoutStripeButton from '../../componenets/stripe/stripe.component';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="warning">
      * For testing payment please use credit card number:*
      <br />
      4242 4242 4242 4242 Exp: 01/20 CVV: 123
    </div>
    <div className="button-stripe">
      <CheckoutStripeButton price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
