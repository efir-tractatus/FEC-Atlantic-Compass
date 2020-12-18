import React from 'react';

const SelectSize = ({ sku }) => {
  console.log(sku);
  return <option value={sku[1]}>{sku[0]}</option>;
};

export default SelectSize;
