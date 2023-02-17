import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import Button from 'react-bootstrap/Button';



function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

  return (
<>
    <h1>  
        Trail Blazer
    </h1>  
        {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUp onLogin={onLogin} />
          
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In Here
            </Button>
          </p>
        </>
      )}
</> 
 )
}

export default Login;