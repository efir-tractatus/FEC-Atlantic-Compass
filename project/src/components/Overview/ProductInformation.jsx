import React from 'react';
import '../../../dist/stylesheets/OverviewStyles.css';

const ProductInformation = (props) => {
  // console.log('Product Information', props);

  if (props.currentStyle.sale_price === '0') {
    var price = <p className="price">${props.currentStyle.original_price}</p>;
  } else {
    var price = (
      <div>
        <p className="sale-price">
          ${props.currentStyle.sale_price}
          <span>   </span>
          <span className='price'><strike>${props.currentStyle.original_price}</strike></span>
        </p>
      </div>
    );
  }

  return (
    <div className="product-information-box">
      <h3>Star Rating Placeholder</h3>
      <h4><a href='#topLevelRatingsAndReviews'>Read all {props.reviews.length} Reviews</a></h4>
      <p className='product-category'>{props.primaryProduct.category}</p>
      <p className='product-name'>{props.primaryProduct.name}</p>
      {price}
    </div>
  );
};

export default ProductInformation;
