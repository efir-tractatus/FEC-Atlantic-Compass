import React from 'react';

const StyleSelectorItem = ({style}) => {
  return (
    <div className="style-grid-item">
      <img className="style-grid-image" src={style.photos[0].thumbnail_url} />
    </div>
  );
};

export default StyleSelectorItem;