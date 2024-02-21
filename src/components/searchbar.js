import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchbar.css'

// search bar on homepage to search for other users
function SearchBar() {
    const [username, setUsername] = useState('');

    let navigate = useNavigate();

    // request backend to search for user token of user with searched-for username
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/api/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        })
        .then(async response => {
          const data = await response.json();
          if (response.ok) {
            console.log("Searched for user: ", data)
            localStorage.setItem('otherToken', data.token)
            navigate('/search') // navigate to searched for user's page
            return;
          } else {
            // give error that searched for user doesn't exist
            alert(data.message)
          }
        })
        .catch(err => console.error('Error signing up:', err));
      };

    // search submit with "Enter" key press
    const handleKeyPress = e => {
        if (e.keyCode === 13) {
          handleSearchSubmit()
        }
    }

    return (
        <form>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Search for User"
            />
          <button className="SearchButton" type="submit" onClick={handleSearchSubmit}>Search</button>
        </form> 

    );
}

export default SearchBar;