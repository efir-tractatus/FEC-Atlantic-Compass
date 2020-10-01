import React from 'react';

const StyleSelectorItem = ({style, handleStyleChange}) => {
  var styleObj = style
  return (
    <div className="style-grid-item" onClick={() => {handleStyleChange(styleObj)}}>
      <img className="style-grid-image" src={style.photos[0].thumbnail_url} />
    </div>
  );
};

export default StyleSelectorItem;