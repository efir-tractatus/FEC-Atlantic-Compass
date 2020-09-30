import StyleSelector from '../../components/Overview/StyleSelector.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  currentStyle: store.currentStyle,
  currentStyles: store.currentStyles,
});

var styleSelectorContainer = connect(mapStateToProps, null)(StyleSelector);

export default styleSelectorContainer;
