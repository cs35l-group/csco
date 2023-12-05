//for header of pages, only have logo for now
import React, { useState } from 'react';
import './header.css'; 
import SignOut from './signoutbutton';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo files/logo-white.svg';

const Header = () => {
    let navigate = useNavigate();
  
    const handleProfile = (event) => {
      event.preventDefault();
      navigate('/profile')
    }

    return (
    <header>
        <div className="logo-container">
            <Link to="/home">
                <img src={logo} alt="CSCO logo" height="35" />
            </Link>
        </div>
        
        <div className='nav-con'>
            <div className="profile-btn-con">
                <button className="navigate" onClick={handleProfile}>Profile</button>
            </div> 
            
            <div className="signout-btn-con">
                <SignOut />
            </div>
        </div>
    </header>

    );
};
export default Header;