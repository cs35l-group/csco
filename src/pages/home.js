import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

function Home() {
  return (
      <div>
        <p>This is the Home page</p>
        <Link to="/">
            <button type="button">Go to Login</button>
        </Link>
      </div>
  );
};
export default Home;