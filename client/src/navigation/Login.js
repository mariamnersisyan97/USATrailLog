import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Login({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((error => setError(error.Errors)))
      }
    })
  }
  return (
    <>
      <h1>  
        Trail Blazer
      </h1>    
      <form onSubmit={handleSubmit}>
    {/* <Form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </Form>
    <Form>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form>
    <Form>
      <button variant="fill" color="primary" type="submit">
        {isLoading ? "Loading..." : "Login"}
      </button>
    </Form>
    <Form>
      {error.map((err) => (
        <error key={err}>{err}</error>
      ))}
    </Form> */}

    <Form.Group value={username}
        onChange={(e) => setUsername(e.target.value)} className="mb-3" controlId="exampleForm.ControlInput1"> 
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Username" />
      </Form.Group>
      <Form.Group value={password}
        onChange={(e) => setPassword(e.target.value)}className="mb-3" controlId="exampleForm.ControlInput1"> 
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" placeholder="Password" />
      </Form.Group>
      <Form>
      <Button variant="info">
        {isLoading ? "Loading..." : "Login"}
        </Button>
    </Form>
    <Form>
      {error.map((err) => (
        <error key={err}>{err}</error>
      ))}
    </Form>
  </form>
<p>
  Don't have an account?  <Button variant="info">
        {isLoading ? "Loading..." : "Signup"}
        </Button>
 </p>
  </>
  )
}

export default Login;