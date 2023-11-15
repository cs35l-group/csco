import React from 'react';
import './App.css'; 
import ReactDOM from "react-dom/client"; //for rendering React components into the DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"; //for using react router for connecting pages together
import navigation from './components/navigation'
import home from './pages/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          CSCO
        </h1>
        <p>A collective board to organize your media.</p>
      </header>
    </div>
  );
}

export default App;
