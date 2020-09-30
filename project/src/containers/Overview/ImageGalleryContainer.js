import ImageGallery from '../../components/Overview/ImageGallery.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  currentImage: store.currentImage,
  currentImages: store.currentImages,
});

var imageGalleryContainer = connect(mapStateToProps, null)(ImageGallery);

export default imageGalleryContainer;
