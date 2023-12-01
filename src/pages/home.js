import React, { useState } from 'react';
import './home.css'
import PhotoGallery from '../components/photogallery'
import Header from '../components/header'
import SearchBar from '../components/searchbar'
import SignOut from '../components/signoutbutton'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';



function Home() {

  let navigate = useNavigate();
  const [posts, setPosts] = useState([])

  const images = [
    require('../assets/images/image1.jpeg'),
    require('../assets/images/image2.jpeg'),
    require('../assets/images/image3.jpeg'),
    require('../assets/images/image4.jpeg'),
    require('../assets/images/image1.jpeg'),
    require('../assets/images/image1.jpeg'),
    require('../assets/images/image2.jpeg'),
    require('../assets/images/image1.jpeg'),
    require('../assets/images/image4.jpeg'),
    require('../assets/images/image3.jpeg'),
    require('../assets/images/image2.jpeg'),
    require('../assets/images/image1.jpeg'),
    // Add more image URLs as needed
  ];

  const handleProfile = (event) => {
    event.preventDefault();
    navigate('/profile')
  }   

  useEffect(() => {
    const fetchImages = async () => {
        const token = "HOME";
        const response = await fetch('http://localhost:4000/api/posts', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (response.ok) {
            const newArr = [];
            data.posts.map((element) => {
                var obj = {
                    url: element.imageUrl,
                    caption: element.caption ? element.caption : null
                };
                newArr.push(obj);
            });

            setPosts(newArr.reverse());
        } else {
          navigate('/')
        }
    }
  
    fetchImages();
}, []); 



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
      <div className="navigation">
          <button className="navigate" onClick={handleProfile}>Profile</button>
          <SignOut />
        </div> 
      <div className='photos'>
        <PhotoGallery images={posts} />
      </div>  
    </>
  );
};
export default Home;