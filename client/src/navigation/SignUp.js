import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function SignUp({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
  
    <div className='signup'>
    
    <form onSubmit={handleSubmit}>
    <h2>Sign-up</h2>
       <Form.Group value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-3" controlId="exampleForm.ControlInput1" > 
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group value={password}
        onChange={(e) => setPassword(e.target.value)}> 
        <Form.Label>Type New Password</Form.Label>
        <Form.Control type="text" placeholder="New Password" />
      </Form.Group>
      <Form.Group value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}className="mb-3" controlId="exampleForm.ControlInput1"> 
        <Form.Label>Re-type New Password</Form.Label>
        <Form.Control type="text" placeholder="Re-type New Password" />
      </Form.Group>
      <Button type="submit">{isLoading ? "Loading..." : "Sign Up Here"}</Button>

      
    </form>
    <form className='errors'>
      {errors.map((err) => (
        <h1 key={err}>{err}</h1>
      ))}
    </form>
    </div>
  )
}

export default SignUp