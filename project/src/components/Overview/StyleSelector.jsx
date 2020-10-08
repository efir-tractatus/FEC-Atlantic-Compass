import React from 'react';
import { useState } from 'react';
import StyleSelectorItem from './StyleSelectorItem.jsx';
import '../../../dist/stylesheets/OverviewStyles.css';

const StyleSelector = (props) => {
  console.log('StyleSelector', props);

  const [group, setGroup] = useState(0);

  var styles = props.currentStyles.map((style) => {
    return (
      <StyleSelectorItem
        style={style}
        currentStyleID={props.currentStyle.style_id}
        handleStyleChange={props.handleStyleChange}
        key={style.style_id}
      />
    );
  });

  var displayStyles = styles.slice(group * 4, group * 4 + 8);

  return (
    <div>
      <h2>StyleSelector Section</h2>
      <h3>{props.currentStyle.name}</h3>
      <img
        src={'./attributes/keyboard-up-arrow.png'}
        onClick={() => {
          if (group > 0) {
            setGroup(group - 1);
          }
        }}
      />
      <div className="style-grid">{displayStyles}</div>
      <img
        src={'./attributes/keyboard-down-arrow.png'}
        onClick={() => {
          if (group * 4 + 8 < styles.length) {
            setGroup(group + 1);
          }
        }}
      />
    </div>
  );
};

export default StyleSelector;
