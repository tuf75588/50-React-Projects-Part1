import React from 'react';
import LoginButton from './login-button';
import LogOutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

// this component will just render a button based on whether the user is logged in or not

function AuthenticationButton() {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <LogOutButton /> : <LoginButton />;
}
export default AuthenticationButton;
