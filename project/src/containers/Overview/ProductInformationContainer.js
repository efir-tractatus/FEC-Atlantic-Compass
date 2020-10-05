import ProductInformation from '../../components/Overview/ProductInformation.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  primaryProduct: store.primaryProduct,
  reviews: store.reviews,
  currentStyle: store.currentStyle,
});

var productInformationContainer = connect(
  mapStateToProps,
  null
)(ProductInformation);

export default productInformationContainer;
