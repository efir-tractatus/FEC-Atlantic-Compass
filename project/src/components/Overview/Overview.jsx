import React from 'react';
import ImageGalleryContainer from '../../containers/Overview/ImageGalleryContainer.js';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductInformation from './ProductInformation.jsx';

var Overview = () => {
  return (
    <div>
      <h1>Overview Component</h1>
      <ImageGalleryContainer />
      <StyleSelector />
      <AddToCart />
      <ProductInformation />
    </div>
  );
};

Overview.propTypes = {};

export default Overview;
