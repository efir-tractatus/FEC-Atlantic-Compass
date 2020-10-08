import React, { useState } from 'react';
import $ from 'jquery';
import '../../../dist/stylesheets/OverviewStyles.css';

const ImageGallery = (props) => {
  // console.log('ImageGallery', props);

  var photos = props.currentStyle.photos;

  const [mainImage, setMainImage] = useState(photos[0].url);
  const [midPoint, setMidPoint] = useState(2);
  const [expanded, setExpand] = useState(false);
  const [zoomed, setZoom] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [firstImg, setFirstImg] = useState(true);
  const [lastImg, setLastImg] = useState(false);

  var belongs = props.currentStyle.photos.find(
    (element) => element.url === mainImage
  );

  var imageCollection = props.currentStyle.photos.map((image, index) => {
    return (
      <div
        className="image-gallery-item"
        key={index}
        onClick={() => {
          setMainImage(image.url);
        }}
      >
        <img className="image-gallery-thumbnail" src={image.thumbnail_url} />
        <hr
          className="thumbnail-selection"
          style={
            mainImage === image.url ? { display: 'block' } : { display: 'none' }
          }
        ></hr>
      </div>
    );
  });

  var renderImages = imageCollection.slice(midPoint - 2, midPoint + 2);

  return (
    <div className="image-gallery-main-box">
      <div className="image-gallery-thumbnail-column">
        <div
          className="image-gallery-scroll-up"
          onClick={() => {
            if (midPoint - 2 > 0) {
              setMidPoint(midPoint - 1);
            }
          }}
        >
          <img src="./attributes/keyboard-up-arrow.png" />
        </div>
        <div className="image-gallery-grid">{renderImages}</div>
        <div
          className="image-gallery-scroll-down"
          onClick={() => {
            if (midPoint + 2 < imageCollection.length) {
              setMidPoint(midPoint + 1);
            }
          }}
        >
          <img src="./attributes/keyboard-down-arrow.png" />
        </div>
      </div>
      <div
        onClick={() => {
          var imageIdx = photos.findIndex(
            (element) => element.url === mainImage
          );
          if (imageIdx - 1 === 0) {
            setMainImage(photos[imageIdx - 1].url)
            setFirstImg(true)
          } else {
            setMainImage(photos[imageIdx - 1].url);
            setFirstImg(false)
          }
          setLastImg(false)
        }}
      >
        <img
          className="left-arrow"
          src="./attributes/left-arrow.png"
          style={
            firstImg === true
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        />
      </div>
      <div className="image-gallery-main-image-box">
        <img
          className="image-gallery-main-image"
          onClick={() => {
            if (!expanded) {
              $('.image-gallery-main-box').animate(
                {
                  width: '200%',
                },
                1000
              );
              setExpand(true);
            }
            if (expanded && !zoomed) {
              $('.image-gallery-main-image').css({
                transform: 'scale(2.5)',
                cursor: 'zoom-out',
              });
              setZoom(true);
            } else if (expanded && zoomed) {
              $('.image-gallery-main-image').css({
                transform: 'scale(1)',
                'object-fit': 'contain',
                width: '100%',
                height: '100%',
                cursor: 'zoom-in',
              });
              setZoom(false);
            }
          }}
          onMouseEnter={(e) => {
            if (expanded) {
              if (zoomed) {
                $('.image-gallery-main-image').css('cursor', 'zoom-out');
              } else {
                $('.image-gallery-main-image').css('cursor', 'zoom-in');
              }
            }
          }}
          onMouseLeave={() => {
            if (expanded) {
              $('.image-gallery-main-image').css('cursor', 'auto');
            }
          }}
          onMouseMove={(e) => {
            if (expanded && zoomed) {
              var x = coordinates.x - e.movementX;
              var y = coordinates.y - e.movementY;
              setCoordinates({ x: x, y: y });
              $('.image-gallery-main-image').css({
                transform: 'translate(' + x + 'px,' + y + 'px) scale(2.5)',
              });
            }
          }}
          src={
            belongs === undefined ? props.currentStyle.photos[0].url : mainImage
          }
        />
      </div>
      <div
        onClick={() => {
          if (lastImg === false) {
            console.log(lastImg);
            var imageIdx = photos.findIndex(
              (element) => element.url === mainImage
            );
            if (imageIdx + 2 === photos.length) {
              setMainImage(photos[imageIdx + 1].url);
              setLastImg(true)
            } else {
              setMainImage(photos[imageIdx + 1].url);
              setFirstImg(false)
            }
          }
          // console.log(lastImg);
        }}
      >
        <img
          className="right-arrow"
          src="./attributes/right-arrow.png"
          style={
            lastImg === true
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        />
      </div>
      <div
        className="image-gallery-expand"
        onClick={() => {
          if (!expanded) {
            $('.image-gallery-main-box').animate(
              {
                width: '200%',
              },
              1000
            );
            setExpand(true);
          } else {
            $('.image-gallery-main-box').animate(
              {
                width: '100%',
              },
              1000
            );
            setExpand(false);
          }
        }}
      >
        <img className="expand-icon" src="./attributes/resize.png" />
      </div>
    </div>
  );
};

export default ImageGallery;
