import React, { useState } from 'react';
import {ColorExtractor} from 'react-color-extractor';

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