import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Login.css'; 

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  useEffect(() => {
    // localStorage.setItem("token", null)
    // localStorage.setItem("otherToken", null)
  }, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (username == "" || password == "") {
      alert("Username and password fields cannot be blank")
      return;
    }
    const login_type = "LOGIN"

    fetch('http://localhost:4000/api/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, login_type }),
    })
    .then(async response => {
      const data = await response.json();
      if (response.ok) {
        console.log("User logged in! ", data)
        localStorage.setItem('token', data.token)
        navigate('/profile')
        return;
      } else {
        alert(data.message)
      }
    })
    .catch(err => console.error('Error signing up:', err));
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (username == "" || password == "") {
      alert("Username and password fields cannot be blank")
      return;
    }
    const login_type = "SIGNUP"
    fetch('http://localhost:4000/api/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, login_type }),
    })
    .then(async response => {
      const data = await response.json();
      if (response.ok) {
        console.log("User signed up! ", data)
        navigate('/home')
        return;
      } else {
        alert(data.message)
      }
    })
    .catch(err => console.error('Error signing up:', err));
  };

  return (
    <div className="Login-section">
      <p>Log into your account</p>
      <form>
        <div className="form-row">
          <input
            className='user-input'
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="form-row">
          <input
            className='password-input'
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
      </form> 
      <div className="login-buttons">
        <button className="LoginButton" type="submit" onClick={handleLoginSubmit}>Login</button>
        <button className="SignUpButton" type="submit" onClick={handleSignUpSubmit}>Sign Up</button>
      </div>
    </div>
  );
}


export default Login;
