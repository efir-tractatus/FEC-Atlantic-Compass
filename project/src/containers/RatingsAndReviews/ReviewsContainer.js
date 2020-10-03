import ReviewsList from '../../components/RatingsAndReviews/ReviewsList.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  reviews: store.reviews,
  primaryProduct: store.primaryProduct,
});

var ReviewsContainer = connect(mapStateToProps, null)(ReviewsList);

export default ReviewsContainer;
