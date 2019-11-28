import React from 'react';

import './sign-in-sign-up.style.scss';
import SignIn from '../../componenets/sign-in/sign-in.component';
import SignUp from '../../componenets/sign-up/sign-up.component';

const SignInSignUp = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
