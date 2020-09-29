import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductInformation from './ProductInformation.jsx';

var Overview = () => {
  return (
    <div>
      <h1>Overview Component</h1>
      <ImageGallery />
      <StyleSelector />
      <AddToCart />
      <ProductInformation />
    </div>
  );
};

Overview.propTypes = {};

export default Overview;
