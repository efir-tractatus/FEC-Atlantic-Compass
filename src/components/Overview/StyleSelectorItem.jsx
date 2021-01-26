import React from 'react';
import InteractionTracker from '../Utility/InteractionTracker.jsx';

const StyleSelectorItem = ({ style, handleStyleChange, currentStyleID }) => {
  return (
    <InteractionTracker
      widget="Overview"
      element="Style"
      render={({ postInteraction }) => (
        <div
          className="style-grid-item"
          onClick={() => {
            postInteraction();
            handleStyleChange(style);
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
            alt="style checkmark"
          />
          <img
            className="style-grid-image"
            src={style.photos[0].thumbnail_url || './attributes/noimage.jpg'}
            alt="style image"
          />
        </div>
      )}
    />
  );
};

export default StyleSelectorItem;
