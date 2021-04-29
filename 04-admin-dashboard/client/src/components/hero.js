import React from 'react';
import Login from './login-button';
import AuthenticationButton from './authentication-button';
import Signup from './sign-up';
import { useAuth0 } from '@auth0/auth0-react';
import AuthedHome from './AuthedHome';
const Hero = () => {
  const { isAuthenticated } = useAuth0();
  return !isAuthenticated ? <div>Please Login</div> : <AuthedHome />;
};

export default Hero;
