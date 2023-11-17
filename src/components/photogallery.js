import React from 'react';
import './photogallery.css';

const PhotoGallery = ({ images }) => {
  return (
    <div className="photo-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGallery;