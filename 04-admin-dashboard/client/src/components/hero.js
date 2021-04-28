import React from 'react';
import Login from './login-button';
import Signup from './sign-up';
const Hero = () => (
  <div className="flex-container">
    <div className="container">
      <div className="row">
        <Login />
        <div>
          Don't have an account yet? <Signup /> now
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
