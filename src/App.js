import React from 'react';
import './App.css'; 
import ReactDOM from "react-dom/client"; //for rendering React components into the DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"; //for using react router for connecting pages together
import navigation from './components/navigation'
import home from './pages/home'

function App() {
  return (
    <div className="Login-top">
      <header className="login-header">
        <h1>
          CSCO
        </h1>
        <p>A collective board to organize your media.</p>
      </header>
      <div className='Login-section'>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
        </form>
        <form> 
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
        </form> 
        <button className="LoginButton" type="submit">Login</button>

      </div>
    </div>
  );
}


export default App;
