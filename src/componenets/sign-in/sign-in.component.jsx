import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  onGoogleSignIn,
  onSignInEmail
} from '../../redux/user-reducer/user.action';

import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { onSignInEmail } = this.props; //

    onSignInEmail(email, password);
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { onGoogleSignIn } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required={true}
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required={true}
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In </CustomButton>
            <CustomButton type="button" onClick={onGoogleSignIn} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  onGoogleSignIn: () => dispatch(onGoogleSignIn()),
  onSignInEmail: (email, password) =>
    dispatch(onSignInEmail({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIn);
