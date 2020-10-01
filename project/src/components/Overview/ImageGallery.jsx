import React, { useState } from 'react';
import ImageGalleryItem from './ImageGalleryItem.jsx';

const ImageGallery = (props) => {
  console.log('ImageGallery', props);
  
  const [image, setImage] = useState(props.currentStyle.photos[0].url);

  var renderImages = props.currentStyle.photos.map((image, index) => {
    return (
      <div
        className="image-gallery-item"
        key={index}
        onClick={() => {
          setImage(image.url)
        }}
      >
        <img className="image-gallery-thumbnail" src={image.thumbnail_url} />
      </div>
    );
  });

  return (
    <div>
      <h2>ImageGallery Section</h2>
      <div>
        <img src={image} />
        {renderImages}
      </div>
    </div>
  );
};

export default ImageGallery;