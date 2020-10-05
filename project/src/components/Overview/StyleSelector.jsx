import React from 'react';
import StyleSelectorItem from './StyleSelectorItem.jsx';

const StyleSelector = (props) => {
  // console.log('StyleSelector', props);

  var styles = props.currentStyles.map((style) => {
    return (
      <StyleSelectorItem
        style={style}
        handleStyleChange={props.handleStyleChange}
        key={style.style_id}
      />
    );
  });

  return (
    <div>
      <h2>StyleSelector Section</h2>
      <h3>{props.currentStyle.name}</h3>
      <div className="style-grid">{styles}</div>
    </div>
  );
};

export default StyleSelector;
