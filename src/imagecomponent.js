// ImageComponent.js

import React from 'react';
import axios from 'axios';

function ImageComponent({ imageUrl }) {
  const handleClick = async () => {
    try {
      await axios.post('http://localhost:5001/api/clicks', { imageUrl });
      console.log('Click data sent to server');
    } catch (error) {
      console.error('Error sending click data:', error);
    }
  };

  return (
    <div className="image-item" onClick={handleClick}>
      <img src={imageUrl} alt="Image-click" />
      <p> </p>
    </div>
  );
}

export default ImageComponent;
