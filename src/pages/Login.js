import { useEffect, useState } from 'react';
import React from 'react';
import './Login.css'; 

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => console.log('User signed up!:', data))
    .catch(error => console.error('Error signing up:', error));
  };

  // return (
  //   <form id="Sign up form" onSubmit={handleSubmit}>
  //     <input
  //       type="text"
  //       value={username}
  //       onChange={e => setUsername(e.target.value)}
  //       placeholder="Username"
  //     />
  //     <input
  //       type="text"
  //       value={password}
  //       onChange={e => setPassword(e.target.value)}
  //       placeholder="Password"
  //     />
  //     <button type="submit">Add Photo</button>
  //   </form>
  // );
  return (
    <div className="Login-top">
      <header className="login-header">
        <h1>
          CSCO
        </h1>
        <p>Log into your account</p>
      </header>
      <div className='Login-section'>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            {/* <label htmlFor="email">Email: </label> */}
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
            />
            {/* <input type="email" id="email" name="email" placeholder="Email" /> */}
          </div>

          <div className="form-row">
            {/* <label htmlFor="password">Password: </label> */}
            <input
              type="text"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
            {/* <input type="password" id="password" name="password" placeholder="Password"/> */}
            </div>
            <button className="LoginButton" type="submit">Login</button>
        </form> 

      </div>
    </div>
  );
}


export default Login;
