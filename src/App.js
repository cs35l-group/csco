import React from 'react';
import ReactDOM from "react-dom/client"; //for rendering React components into the DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //for using react router for connecting pages together
import Home from './pages/home'
import Login from './pages/Login'
import './App.css'; 


function App() {
  return (
    <>
      <Router>
        <div>
          {/* Navigation links can go here */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} exact/>
          </Routes>
        </div>
      </Router>
    </>
  )
}


export default App;
