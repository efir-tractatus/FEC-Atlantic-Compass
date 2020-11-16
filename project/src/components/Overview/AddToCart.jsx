import React, { useEffect, useState } from 'react';
import SelectSize from './SelectSize.jsx';
import '../../../dist/stylesheets/OverviewStyles.css';
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

  // console.log('Skus', skus);

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
  console.log('RenderSkus', renderSkus);

  var renderQuantity = [];
  var maxQuantity = quantity > 15 ? 15 : quantity;

  for (var i = 1; i <= maxQuantity; i++) {
    renderQuantity.push(<option key={i}>{i}</option>);
  }

  return (
    <div>
      <select
        value={quantity}
        className="size-selector"
        disabled={renderSkus.length === 1 ? true : false}
        onChange={(e) => {
          // let sku = JSON.parse(e.target.value);
          setQuantity(e.target.value);
          // setSize(sku[0]);
        }}
      >
        {renderSkus.length === 1 ? (
          <option key={'oos'}>OUT OF STOCK</option>
        ) : (
          renderSkus
        )}
      </select>
      <select
        className="quantity-selector"
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
