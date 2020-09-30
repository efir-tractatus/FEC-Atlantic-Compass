import React from 'react';

const SelectSize = ({ sku }) => {
  return <option value={sku[1]}>{sku[0]}</option>;
};

export default SelectSize;
