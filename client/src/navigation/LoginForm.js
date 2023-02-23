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
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }
  return (
    
  //     <form onSubmit={handleSubmit}>

  //   <Form.Group> 
  //       <Form.Label>Username</Form.Label>
  //       {/* <Form.Control
  //       type="username" placeholder="Username" /> */}
  //     </Form.Group>
  //       <input
  //       id="username"
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>

  //     <Form.Group> 
  //       <Form.Label>Password</Form.Label>
  //       {/* <Form.Control 
  //       type="password" placeholder="Password" /> */}

  //       <input
  //       id="password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
  //     </Form.Group>
  //     <Form>
  //     <Button variant="info">
  //       {isLoading ? "Loading..." : "Login"}
  //       </Button>
  //   </Form>
  //   <Form>
  //     {errors.map((err) => (
  //       <h1 key={err}>{err}</h1>
  //     ))}
  //   </Form>
  // </form>

  <form onSubmit={handleSubmit}>
<div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your information with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
  </div>
<button type="submit" class="btn btn-primary">Login</button>
<form>
{errors.map((err) => (
          <h1 key={err}>{err}</h1>
        ))}
</form>
</form>
  )
}

export default LoginForm;