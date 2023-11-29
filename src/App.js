import React from 'react';
import ReactDOM from "react-dom/client"; //for rendering React components into the DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //for using react router for connecting pages together
import Home from './pages/home'
import LandingPage from './pages/LandingPage'
import Profile from './pages/Profile'
import OtherProfile from './pages/OtherProfile'
import FileUpload from './pages/UploadPage'


import './App.css'; 


function App() {
  return (
    <>
      <Router>
        <div>
          {/* Navigation links can go here */}
          <Routes>
            <Route path="/" element={<LandingPage />} exact/>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<OtherProfile />} />
            <Route path="/upload" element={<FileUpload />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}


export default App;
