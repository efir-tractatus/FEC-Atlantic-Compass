import React from 'react';
'../../../dist/stylesheets/OverviewStyles.css';

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
            ? { display: 'inline-block' }
            : { display: 'none' }
        }
      />
      <img className="style-grid-image" src={style.photos[0].thumbnail_url} />
    </div>
  );
};

export default StyleSelectorItem;
