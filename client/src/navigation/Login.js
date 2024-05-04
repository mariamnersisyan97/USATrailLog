import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import Button from 'react-bootstrap/Button';



function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

  return (
<div>
    <h1 className='header'>  
        Trail Blazer
    </h1>  
        {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
        
          <p className='login-signup-switch-button'>
            Don't have an account?
            <button  onClick={() => setShowLogin(false)}>
              Sign Up Here!
            </button>
          </p>
         
          
        </>
      ) : (
        <>
          <SignUp onLogin={onLogin} />
        
          <p className='login-signup-switch-button'>
            Already have an account? 
            <button onClick={() => setShowLogin(true)}>
              Log In Here!
            </button>
          </p>
        
        </>
      )}
</div> 
 )
}

export default Login;