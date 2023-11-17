import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
      <div>
        <p>This is the home page</p>
        <Link to="/">
            <button type="button">Go to Login</button>
        </Link>
      </div>
  );
};
export default Home;