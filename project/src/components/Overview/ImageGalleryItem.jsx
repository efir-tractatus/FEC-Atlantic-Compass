import React from 'react';

const ImageGalleryItem = ({ image }) => {
  return (
    <div className="image-gallery-item">
      <img className="image-gallery-thumbnail" src={image.thumbnail_url} />
    </div>
  );
};

export default ImageGalleryItem;