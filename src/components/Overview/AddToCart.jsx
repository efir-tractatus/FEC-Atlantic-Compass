import React, { useEffect, useState } from 'react';
import SelectSize from './SelectSize.jsx';
import $ from 'jquery';

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

  const [quantity, setQuantity] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    setQuantity('');
    setSize('');
  }, [props.currentStyle.style_id]);

  var renderSkus = skus.map((sku) => {
    return <SelectSize sku={sku} key={sku[0]} />;
  });

  renderSkus.unshift(
    <option value="" key={'default'}>
      Select Size
    </option>
  );

  var renderQuantity = [];
  var maxQuantity = quantity > 15 ? 15 : quantity;

  for (var i = 1; i <= maxQuantity; i++) {
    renderQuantity.push(<option key={i}>{i}</option>);
  }

  return (
    <div>
      <label htmlFor="id-size-selector" hidden>
        Size
      </label>
      <select
        value={quantity}
        className="size-selector"
        id="id-size-selector"
        disabled={renderSkus.length === 1 ? true : false}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {renderSkus.length === 1 ? (
          <option key={'oos'}>OUT OF STOCK</option>
        ) : (
          renderSkus
        )}
      </select>
      <label htmlFor="id-quantity-selector" hidden>
        Quantity
      </label>
      <select
        className="quantity-selector"
        id="id-quantity-selector"
        disabled={quantity === '' ? true : false}
      >
        {quantity === '' ? <option key={'none'}>-</option> : renderQuantity}
      </select>
      <p></p>
      <button className="add-to-bag">ADD TO BAG</button>
    </div>
  );
};

export default AddToCart;
