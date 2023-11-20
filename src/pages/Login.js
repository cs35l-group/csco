import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Login.css'; 

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  // const handleLoginSubmit = (event) => {
  //   event.preventDefault();
  //   if (username == "" || password == "") {
  //     console.log("Username and password fields cannot be blank")
  //     return;
  //   }
  //   fetch('http://localhost:4000/api/logins', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('User logged in!:', data)
  //     navigate('/home')
  //   })
  //   .catch(error => console.error('Error signing up:', error));
  // };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (username == "" || password == "") {
      console.log("Username and password fields cannot be blank")
      return;
    }
    fetch('http://localhost:4000/api/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (response.ok){
        const data = response.json();
        console.log('User signed up!:', data)
        navigate('/home')
      }
      else{ 
        alert("USERNAME EXISTS")
      }
    })
    .catch(err => console.error('Error signing up:', err));
  };

  return (
    <div className="Login-top">
      {/* <header className="login-header">
        <h1>
          CSCO
        </h1>
        <p>Log into your account</p>
      </header> */}
      <p>Log into your account</p>
      <div className='Login-section'>
        <form>
          <div className="form-row">
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
            </div>
        </form> 
        {/* <button className="LoginButton" type="submit" onClick={handleLoginSubmit}>Login</button> */}
        <button className="SignUpButton" type="submit" onClick={handleSignUpSubmit}>Sign Up</button>



      </div>
    </div>
  );
}


export default Login;
