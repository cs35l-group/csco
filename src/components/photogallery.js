import React from 'react';
import './photogallery.css';

import { useEffect, useState } from 'react';

// TODO: refactor columns into reusable components props passing in array

const PhotoGallery = ({ images }) => {
  return (
    <div class='photogallery'>
      <div className="col">
        {images.map((image, index) => {
          // This is a check to see if data is hosted by CSCO or by external website, then append our root
          // if it's just a relative path within our backend
          var url = image.includes('http') ? image : 'http://localhost:4000/' + image;

          // Loop through every even indexed image, as there are two columns
          if (index%2 == 0){
            return(<img key={index} src={url} alt={`Photo ${index + 1} Source ${url}`} />)
          }
        })}
      </div>
      <div className="col">
        {images.map((image, index) => {
          var url = image.includes('http') ? image : 'http://localhost:4000/' + image;
          if (index%2 != 0){
            return(<img key={index} src={url} alt={`Photo ${index + 1} Source ${url}`} />)
          }
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;