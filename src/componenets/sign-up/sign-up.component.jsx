import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUp } from '../../redux/user-reducer/user.action';

import './sign-up.style.scss';

const SignUpComponent = ({ SignUp }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('The password do not matches');
      return;
    }

    try {
      SignUp({
        email,
        password,
        displayName
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2>I sign up with email and password</h2>
      <span>Sign up with your email</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  SignUp: objFileds => dispatch(SignUp(objFileds))
});

export default connect(null, mapDispatchToProps)(SignUpComponent);
