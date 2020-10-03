import React, { useState } from 'react';
import SelectSize from './SelectSize.jsx';

const AddToCart = (props) => {
  // console.log('AddToCart', props);
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

  renderSkus.push(<option value='' key={'default'}>Select Size</option>)

  const [quantity, setSize] = useState(skus[0][1]);

  var renderQuantity = [];

  for (var i = 0; i <= quantity; i++) {
    renderQuantity.push(<option key={i}>{i}</option>);
  }

  return (
    <div>
      <h2>AddToCart Section</h2>
      <select defaultValue=''
        className="size-selector"
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        {renderSkus}
      </select>
      <select className="quantity-selector">{renderQuantity}</select>
      <button className='add-to-bag'>ADD TO BAG</button>
      <div>Star/Heart Placeholder</div>
    </div>
  );
};

export default AddToCart;
