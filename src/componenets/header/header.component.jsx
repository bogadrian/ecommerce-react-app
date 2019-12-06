import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart-reducer/selectors';
import { selectCurrentUser } from '../../redux/user-reducer/selectors';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';
import { SignOutStart } from '../../redux/user-reducer/user.action';

const Header = ({ currentUser, toggle, SignOutStart }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={SignOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {toggle === true ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  toggle: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  SignOutStart: () => dispatch(SignOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
