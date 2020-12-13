import React from 'react';
import ImageGalleryContainer from '../../containers/Overview/ImageGalleryContainer.js';
import StyleSelectorContainer from '../../containers/Overview/StyleSelectorContainer.js';
import ProductInformationContainer from '../../containers/Overview/ProductInformationContainer.js';
import AddToCartContainer from '../../containers/Overview/AddToCartContainer.js';

var Overview = () => {
  return (
    <div>
      <p className="overview-component"></p>
      <div className="overview-main-box">
        <div className="overview-left-box">
          <ImageGalleryContainer />
        </div>
        <div className="overview-right-box">
          <ProductInformationContainer />
          <StyleSelectorContainer />
          <AddToCartContainer />
        </div>
      </div>
    </div>
  );
};

Overview.propTypes = {};

export default Overview;
