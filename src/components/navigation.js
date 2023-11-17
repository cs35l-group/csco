import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> //links to home 
        {/* Add more navigation links as needed */} 
      </ul>
    </nav>
  );
};

export default NavigationBar;