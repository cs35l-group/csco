import React from 'react';
import './home.css'
import PhotoGallery from '../components/photogallery'

const Home = () => {
  //for photo gallery component 
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
        <p>Your memories and inspiration, all in one place.</p>
      </div>
    
      <div>
        <PhotoGallery images={images} />
      </div>
    
    </>
  );
};
export default Home;