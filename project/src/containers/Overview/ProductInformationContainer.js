import ProductInformation from '../../components/Overview/ProductInformation.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  primaryProduct: store.primaryProduct,
  primaryProductMetadata: store.primaryProductMetadata,
});

var productInformationContainer = connect(
  mapStateToProps,
  null
)(ProductInformation);

export default productInformationContainer;
