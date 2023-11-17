//for header of pages, only have logo for now
import React from 'react';
import './header.css'

import logo from '../assets/logo files/logo.svg';
const Header = () => {
return (
    <header>
        <div className="logo-container">
            <img src={logo} alt="CSCO logo" height="35" />
        </div>

        <div className="button-container">
            <button>Login</button> 
        </div>
    
    </header>

    );
};
export default Header;