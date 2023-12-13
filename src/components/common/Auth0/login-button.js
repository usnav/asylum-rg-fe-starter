import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
      style={{
        color: 'white',
        paddingLeft: '65px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
