import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((err => setErrors(err.errors)))
      }
    })
  }
  return (
    <>
      {/* <h1>  
        Trail Blazer
      </h1>     */}
      <form onSubmit={handleSubmit}>

    <Form.Group value={username}
        onChange={(e) => setUsername(e.target.value)}  > 
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" />
      </Form.Group>
        {/* <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> */}

      <Form.Group value={password}
        onChange={(e) => setPassword(e.target.value)}> 
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form>
      <Button variant="info">
        {isLoading ? "Loading..." : "Login"}
        </Button>
    </Form>
    <Form>
      {errors.map((err) => (
        <h1 key={err}>{err}</h1>
      ))}
    </Form>
  </form>
{/* <p>
  Don't have an account?  <Button variant="info">
        {isLoading ? "Loading..." : "Signup"}
        </Button>
 </p> */}
  </>
  )
}

export default LoginForm;