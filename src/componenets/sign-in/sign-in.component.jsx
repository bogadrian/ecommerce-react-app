import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  onGoogleSignIn,
  onSignInEmail
} from '../../redux/user-reducer/user.action';

import './sign-in.style.scss';

const SignIn = ({ onSignInEmail, onGoogleSignIn }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    onSignInEmail(email, password);
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required={true}
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
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
};

const mapDispatchToProps = dispatch => ({
  onGoogleSignIn: () => dispatch(onGoogleSignIn()),
  onSignInEmail: (email, password) =>
    dispatch(onSignInEmail({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIn);
