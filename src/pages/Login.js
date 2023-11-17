import React from 'react';
import './Login.css'; 

function Login() {
  return (
    <div className="Login-top">
      <header className="login-header">
        <h1>
          CSCO
        </h1>
        <p>Log into your account</p>
      </header>
      <div className='Login-section'>
        <form>
          <div className="form-row">
            {/* <label htmlFor="email">Email: </label> */}
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>

          <div className="form-row">
            {/* <label htmlFor="password">Password: </label> */}
            <input type="password" id="password" name="password" placeholder="Password"/>
            </div>
        </form> 
        <button className="LoginButton" type="submit">Login</button>

      </div>
    </div>
  );
}


export default Login;
