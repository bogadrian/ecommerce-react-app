import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.componenet';
import ShopPage from './componenets/shop/shop.component';
import Header from './componenets/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import CheckoutPage from './pages/checkout/checkout.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user-reducer/selectors';
import { checkUserSession } from './redux/user-reducer/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
