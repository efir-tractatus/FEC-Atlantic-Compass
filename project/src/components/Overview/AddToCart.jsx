import React from 'react';
import SelectSize from './SelectSize.jsx';

const AddToCart = (props) => {
  console.log('AddToCart', props);
  var skus = [];
  var skusObject = {};

  for (var i in props.currentStyle.skus) {
    if (skusObject.hasOwnProperty(props.currentStyle.skus[i].size)) {
      skusObject[props.currentStyle.skus[i].size] +=
        props.currentStyle.skus[i].quantity;
    } else {
      skusObject[props.currentStyle.skus[i].size] =
        props.currentStyle.skus[i].quantity;
    }
  }
  skus = Object.entries(skusObject);

  var renderSkus = skus.map((sku) => {
    return <SelectSize sku={sku} key={sku[0]} />;
  });

  return (
    <div>
      <h2>AddToCart Section</h2>
      <select className="size-selector">{renderSkus}</select>
    </div>
  );
};

export default AddToCart;
