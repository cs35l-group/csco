import React from 'react';
import './home.css'
import PhotoGallery from '../components/photogallery'
import Header from '../components/header'
import SearchBar from '../components/searchbar'
import { Link } from 'react-router-dom';



function Home() {

  

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
      <div>
        <PhotoGallery images={images} />
      </div>
      <Link to="/">
          <button type="button">Sign Out</button>
      </Link>
    </>
  );
};
export default Home;