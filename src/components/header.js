//for header of pages, only have logo for now
import React from 'react';
import logo from '../assets/logo files/logo.svg';
const Header = () => {
return (
    <header>
        <img src={logo} alt="CSCO logo" height="40" />
    </header>
    );
};
export default Header;