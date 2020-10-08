import React from 'react';

const StyleSelectorItem = ({ style, handleStyleChange, currentStyleID }) => {
  var styleObj = style;
  return (
    <div
      className="style-grid-item"
      onClick={() => {
        handleStyleChange(styleObj);
      }}
    >
      <img
        className="style-grid-item-checkmark"
        src={'./attributes/checkmark.png'}
        style={
          style.style_id === currentStyleID
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      />
      <img className="style-grid-image" src={style.photos[0].thumbnail_url} />
    </div>
  );
};

export default StyleSelectorItem;
