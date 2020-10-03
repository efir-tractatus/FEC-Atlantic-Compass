import React, { useState } from 'react';
import SelectSize from './SelectSize.jsx';

const AddToCart = (props) => {
<<<<<<< HEAD
 // console.log('AddToCart', props);
  return <h2>AddToCart Section</h2>;
=======
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

  const [quantity, setSize] = useState(skus[0][1]);

  var renderQuantity = [];

  for (var i = 0; i <= quantity; i++) {
    renderQuantity.push(<option key={i}>{i}</option>);
  }

  return (
    <div>
      <h2>AddToCart Section</h2>
      <select
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
>>>>>>> ed590664081c269cabfd1b7441d5239ac01767cd
};

export default AddToCart;
