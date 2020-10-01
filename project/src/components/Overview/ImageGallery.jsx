import React, { useState } from 'react';

const ImageGallery = (props) => {
  console.log('ImageGallery', props);

  const [mainImage, setMainImage] = useState(props.currentStyle.photos[0].url);

  var belongs = props.currentStyle.photos.some(
    (element) => element.url === mainImage
  );

  var renderImages = props.currentStyle.photos.map((image, index) => {
    return (
      <div
        className="image-gallery-item"
        key={index}
        onClick={() => {
          setMainImage(image.url);
        }}
      >
        <img className="image-gallery-thumbnail" src={image.thumbnail_url} />
      </div>
    );
  });

  return (
    <div>
      <h2>ImageGallery Section</h2>
      <div className="image-gallery-main-image-box">
        <img className='image-gallery-main-image'
          src={belongs === false ? props.currentStyle.photos[0].url : mainImage}
        />
      </div>
      <div className="image-gallery-grid">{renderImages}</div>
    </div>
  );
};

export default ImageGallery;
