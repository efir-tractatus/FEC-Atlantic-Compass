import React, { useState } from 'react';

const ImageGallery = (props) => {
  console.log('ImageGallery', props);

  const [mainImage, setMainImage] = useState(props.currentStyle.photos[0].url);

  var belongs = props.currentStyle.photos.find(
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
        <hr className='thumbnail-selection' style={mainImage === image.url ? {display: 'block'} : {display: 'none'}}></hr>
      </div>
    );
  });

  return (
    <div className="image-gallery-main-image-box">
      <div className="image-gallery-grid">{renderImages}</div>
      <img
        className="image-gallery-main-image"
        src={
          belongs === undefined ? props.currentStyle.photos[0].url : mainImage
        }
      />
    </div>
  );
};

export default ImageGallery;
