import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Login.css'; 

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

  const handleLoginSubmit = () => {
    if (username == "" || password == "") {
      showError("Username and password fields cannot be blank")
      return;
    }

    fetch('http://localhost:4000/api/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, logintype }),
    })
    .then(async response => {
      const data = await response.json();
      if (response.ok) {
        console.log("User logged in! ", data)
        localStorage.setItem('token', data.token)
        navigate('/profile')
        return;
      } else {
        showError(data.message)
      }
    })
    .catch(err => console.error('Error signing up:', err));
  };

  const handleSignUpSubmit = () => {
    if (username == "" || password == "") {
      showError("Username and password fields cannot be blank")
      return;
    }
    fetch('http://localhost:4000/api/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, logintype }),
    })
    .then(async response => {
      const data = await response.json();
      if (response.ok) {
        console.log("User signed up! ", data)
        localStorage.setItem('token', data.token)
        navigate('/profile')
        return;
      } else {
        showError(data.message)
      }
    })
    .catch(err => console.error('Error signing up:', err));
  };

  const showError = (msg) => {
    document.querySelector('.err-msg').innerHTML = msg;
    document.querySelector('.err-msg').classList.remove('hidden');
  }

  const showAuth = (type) => {
    setLoginType(type);
    setAuthHidden(!isAuthHidden);
    document.querySelector('.user-input').focus();
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (logintype == "LOGIN") handleLoginSubmit();
    else {handleSignUpSubmit();}
  }

  return (
    <div className="Login-section">
      <div className="navbar">
        <div>
          <a ><span className="icon">📸</span></a>
          <a> CSCO</a>
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
  );
}


export default Login;
