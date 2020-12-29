import React from 'react';
import ReviewsBreakDownContainer from '../../containers/RatingsAndReviews/ReviewsBreakDownContainer.js';
import ReviewsContainer from '../../containers/RatingsAndReviews/ReviewsContainer.js';

var RatingsAndReviews = () => {
  return (
    <div>
      <p className="reviews-header" id="start-of-ratings">
        RATINGS AND REVIEWS
      </p>
      <div className="topLevelRatingsAndReviews">
        <ReviewsBreakDownContainer />
        <ReviewsContainer />
      </div>
    </div>
  );
};

RatingsAndReviews.propTypes = {};

export default RatingsAndReviews;
