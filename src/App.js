import React from 'react';
import './App.css'; 
import ReactDOM from "react-dom/client"; //for rendering React components into the DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"; //for using react router for connecting pages together
import navigation from './components/navigation'
import Home from './pages/home'
import Header from './components/header'

function App() {
  return (
    <><div>
      <Header />
    </div>
    <div>
        <Home />
      </div></>
  );
}


export default App;
