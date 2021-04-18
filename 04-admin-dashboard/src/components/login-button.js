import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="btn btn-primary btn-block"
    >
      Log in
    </button>
  );
}

export default LoginButton;
