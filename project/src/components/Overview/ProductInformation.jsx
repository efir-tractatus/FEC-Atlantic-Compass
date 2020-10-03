import React from 'react';

const ProductInformation = (props) => {
  // console.log('Product Information', props);

  if (props.currentStyle.sale_price === '0') {
    var price = <p>{props.currentStyle.original_price}</p>;
  } else {
    var price = (
      <div>
        <p className="sale-price">{props.currentStyle.sale_price}</p>
        <p>
          <strike>{props.currentStyle.original_price}</strike>
        </p>
      </div>
    );
  }

  return (
    <div className="product-information">
      <h2>ProductInformation Section</h2>
      <h3>Star Rating Placeholder</h3>
      <p className='product-category'>{props.primaryProduct.category}</p>
      <p className='product-name'>{props.currentStyle.name}</p>
      {price}
      <p className='product-description'>{props.primaryProduct.description}</p>
    </div>
  );
};

export default ProductInformation;
