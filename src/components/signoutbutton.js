import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignOut() {

    let navigate = useNavigate();

    const handleSignOut = (event) => {
        event.preventDefault();
        localStorage.setItem("token", null)
        navigate('/')
    }

    return (
        <button class="navigate" onClick={handleSignOut}>Sign Out</button>
    );
}

export default SignOut;



