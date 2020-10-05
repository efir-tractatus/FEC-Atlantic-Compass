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

  renderSkus.unshift(<option value='' key={'default'}>Select Size</option>)

  const [quantity, setSize] = useState('');

  var renderQuantity = [];
  var maxQuantity = quantity > 15 ? 15 : quantity

  for (var i = 1; i <= maxQuantity; i++) {
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
      <select className="quantity-selector" disabled={quantity === '' ? true : false}>
        {quantity === '' ? <option key={'none'}>-</option> : renderQuantity}
        </select>
      <button className='add-to-bag'>ADD TO BAG</button>
      <div>Star/Heart Placeholder</div>
    </div>
  );
};

export default AddToCart;
