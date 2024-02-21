import React from 'react';
import { useNavigate } from 'react-router-dom';

// button to signout
function SignOut() {

    let navigate = useNavigate();

    const handleSignOut = (event) => {
        event.preventDefault();
        localStorage.setItem("token", null) // resets token
        navigate('/') // navigates to login page
    }

    return (
        <button class="navigate" onClick={handleSignOut}>Sign Out</button>
    );
}

export default SignOut;



