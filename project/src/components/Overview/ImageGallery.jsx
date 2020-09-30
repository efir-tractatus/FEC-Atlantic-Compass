import React from 'react';
import ImageGalleryItem from './ImageGalleryItem.jsx';

const ImageGallery = (props) => {
  console.log('ImageGallery', props);

  var renderImages = props.currentImages.map((image, index) => {
    return <ImageGalleryItem image={image} key={index} />;
  });

  return (
    <div>
      <h2>ImageGallery Section</h2>
      <div>
        <img src={props.currentImage.url} />
        {renderImages}
      </div>
    </div>
  );
};

export default ImageGallery;
