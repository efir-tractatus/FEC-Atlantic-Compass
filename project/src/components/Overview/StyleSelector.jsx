import React from 'react';
import StyleSelectorItem from './StyleSelectorItem.jsx';

const StyleSelector = (props) => {
<<<<<<< HEAD
 //   console.log('StyleSelector', props)
    return <h2>StyleSelector Section</h2>
}
=======
  // console.log('StyleSelector', props);
>>>>>>> ed590664081c269cabfd1b7441d5239ac01767cd

  var styles = props.currentStyles.map((style) => {
    return <StyleSelectorItem style={style} handleStyleChange={props.handleStyleChange} key={style.style_id} />;
  });

  return (
    <div>
      <h2>StyleSelector Section</h2>
      <div className="style-grid">{styles}</div>
    </div>
  );
};

export default StyleSelector;
