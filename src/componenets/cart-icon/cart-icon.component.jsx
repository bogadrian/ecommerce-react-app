import React from 'react';
import { connect } from 'react-redux';
import { toggleStateHidden } from '../../redux/cart-reducer/cart-action';
import { selectCartItemsCount } from '../../redux/cart-reducer/selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shop-icon.svg';

import './cart-icon.style.scss';

const CartIcon = ({ toggleStateHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleStateHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  toggleStateHidden: () => dispatch(toggleStateHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
