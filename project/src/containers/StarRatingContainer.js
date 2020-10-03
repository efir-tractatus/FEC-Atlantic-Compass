import StarRating from '../components/StarRating.jsx';
import store from '../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
    primaryProductMetadata: store.primaryProductMetadata
})

var starRatingContainer = connect(mapStateToProps, null)(StarRating)

export default starRatingContainer;