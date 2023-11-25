import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchbar.css'

function SearchBar() {
    const [username, setUsername] = useState('');

    let navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        if (username == "") {
          alert("Username field cannot be blank")
          return;
        }

        fetch('http://localhost:4000/api/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        })

        .then(async response => {
          console.log(response);
          const data = await response.json();
          if (response.ok) {
            console.log("User found! ", data)
            navigate('/profile')
            return;
          } else {
            alert(data.message)
          }
        })
        .catch(err => console.error('User not Found:', err));
      };
          
          

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