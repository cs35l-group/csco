import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchbar.css'

function SearchBar() {
    const [username, setUsername] = useState('');

    let navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // fetch('http://localhost:4000/api/logins', {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ username, password }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //   console.log('User logged in!:', data)
        //   navigate('/home')
        // })
        // .catch(error => console.error('Error signing up:', error));

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
            navigate('/search')
            return;
          } else {
            alert(data.message)
          }
        })
        .catch(err => console.error('Error signing up:', err));
      };

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