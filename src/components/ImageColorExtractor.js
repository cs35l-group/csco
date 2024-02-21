import React, { useState } from 'react';
import {ColorExtractor} from 'react-color-extractor';

// extracts dominant color from image currently staged to be posted and changes background color to it
const ImageColorExtractor = ({ imageUrl, setDomColor }) => {

  const handleColors = (colors) => {
    // The dominant color is usually the first one in the array
    const dominantColor = colors[0];
    setDomColor(dominantColor);
    console.log('Dominant Color:', dominantColor);
  };

  return (
    <ColorExtractor src={imageUrl} getColors={handleColors}></ColorExtractor>
  );
};

export default ImageColorExtractor;