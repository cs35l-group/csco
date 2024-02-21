import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Login.css'; 
import logo from '../assets/logo files/logo.png'

// authentication component for logging in displayed on Landing Page
function Login() {
  const [logintype, setLoginType] = useState(''); // Created a state hook for Logintype
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // UI HOOKS
  const [isAuthHidden, setAuthHidden] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", null)
    localStorage.setItem("otherToken", null)
  }, []);

  // when loginType="LOGIN" and submit pressed
  const handleLoginSubmit = () => {
    // error if username or password is blank
    if (username == "" || password == "") {
      showError("Username and password fields cannot be blank")
      return;
    }

    // send request to backend to login (loginType = "login")
    fetch('http://localhost:4000/api/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, logintype }),
    })
    .then(async response => {
      const data = await response.json();
      // if login successful, set token to user token
      if (response.ok) {
        console.log("User logged in! ", data)
        localStorage.setItem('token', data.token)
        navigate('/profile') // navigate to user profile
        return;
      } else {
        showError(data.message)
      }
    })
    .catch(err => console.error('Error signing up:', err));
  };

  // when loginType="SIGNUP" and submit pressed
  const handleSignUpSubmit = () => {
    if (username == "" || password == "") {
      showError("Username and password fields cannot be blank")
      return;
    }

    // send request to backend to signup new user
    fetch('http://localhost:4000/api/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, logintype }),
    })
    .then(async response => {
      const data = await response.json();
      // if sign up successful, set token to new user token
      if (response.ok) {
        console.log("User signed up! ", data)
        localStorage.setItem('token', data.token)
        navigate('/profile') // navigate to new user profile
        return;
      } else {
        showError(data.message)
      }
    })
    .catch(err => console.error('Error signing up:', err));
  };

  // show any login/signup errors on the field
  const showError = (msg) => {
    document.querySelector('.err-msg').innerHTML = msg;
    document.querySelector('.err-msg').classList.remove('hidden');
  }

  // show the authentication button
  const showAuth = (type) => {
    setLoginType(type);
    setAuthHidden(!isAuthHidden);
    document.querySelector('.user-input').focus();
  }

  // use "Enter" key to submit login/signup
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (logintype == "LOGIN") handleLoginSubmit();
    else {handleSignUpSubmit();}
  }

  // display authentication buttons and username and password fields
  return (
    <div className="auth-con">
      <div className="Login-section">
      <div className="navbar">
        <div>
          <img src={logo} onClick={()=>{window.location.href = "/"}}></img>
        </div>
        <div>
          <a class="btn btn2" onClick={()=>{showAuth('LOGIN')}}>Login</a>
          <a class="btn" onClick={()=>{showAuth('SIGNUP')}}>Sign Up</a>
        </div>
      </div>
      <form className={isAuthHidden ? 'auth hidden' : 'auth'}>
          <input
            className='user-input'
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            className='password-input'
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
      </form>
      <div className="err-msg hidden">Message HELLO</div>
    </div>
    </div>
    
  );
}


export default Login;
