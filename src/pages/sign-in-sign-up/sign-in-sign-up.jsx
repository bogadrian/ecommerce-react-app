import React from 'react';

import './sign-in-sign-up.style.scss';
import SignIn from '../../componenets/sign-in/sign-in.component';
import SignUpComponent from '../../componenets/sign-up/sign-up.component';

const SignInSignUp = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUpComponent />
    </div>
  );
};

export default SignInSignUp;
