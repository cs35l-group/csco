import React, { useState } from 'react';
import './home.css'
import PhotoGallery from '../components/photogallery'
import Header from '../components/header'
import SearchBar from '../components/searchbar'
import SignOut from '../components/signoutbutton'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


// Home Page
function Home() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState([]) // list of posts

  useEffect(() => {
    // fetches images for homepage from backend (all posts) using special toke "HOME"
    const fetchImages = async () => {
        const token = "HOME";
        const response = await fetch('http://localhost:4000/api/posts', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        // if response successful
        if (response.ok) {
            const newArr = [];
            // maps backend response to posts that can be displayed
            data.posts.map((element) => {
                var obj = {
                    url: element.imageUrl,
                    caption: element.caption ? element.caption : null,
                    vibes: element.vibes ? element.vibes : null
                };
                newArr.push(obj);
            });

            setPosts(newArr.reverse()); // sorts post in order of latest posted
        } 
        // if response not successful, navigate to login page
        else {
          navigate('/')
        }
    }
  
    fetchImages();
}, []); 


  // displays all posts with PhotoGallery component
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <p>Your memories and inspiration, all in one place.</p> 
      </div>
      <div>
        <SearchBar />
      </div>
      <div className='photos'>
        <PhotoGallery images={posts} />
      </div>  
    </>
  );
};
export default Home;