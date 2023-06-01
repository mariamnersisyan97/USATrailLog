import React from 'react'
import { useState } from 'react';


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
        "Accept": "application/json",
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
//     <div className='login-home'>
//   <form onSubmit={handleSubmit}>
// <div class="form-group">
//     <label for="exampleInputEmail1">Username </label>
//     <input id="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
// placeholder="Enter username"/>
//     {/* <small id="emailHelp" class="form-text text-muted">We'll never share your information with anyone else.</small> */}
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password </label>
//     <input id="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
//   </div>
// <button type="submit" class="btn btn-primary">Login</button>
// <form>
// {errors.map((err) => (
//           <h1 key={err}>{err}</h1>
//         ))}
// </form>
// </form>
// </div>

<div>
<form className='form-login' onSubmit={handleSubmit}>  
  <h2>Login</h2>
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text"
     id="username"
     name="username"
     placeholder="Enter username"
     value={username}
    onChange={(e) => setUsername(e.target.value)}
     required/>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password"
     id="password"
     name="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"
        required/>
  </div>
  <button type="submit">Submit</button>
  {/* <p> Don't have an account? </p>
  <button type="signup"> Signup </button> */}

</form>
 <form className='errors'>
{errors.map((err) => (
          <h1 key={err}>{err}</h1>
        ))}
</form>
</div>
  )
}

export default LoginForm;