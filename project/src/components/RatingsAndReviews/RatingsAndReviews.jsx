import React from 'react';
import ReviewsBreakDownContainer from '../../containers/RatingsAndReviews/ReviewsBreakDownContainer.js';
import ReviewsContainer from '../../containers/RatingsAndReviews/ReviewsContainer.js';

var RatingsAndReviews = () => {
  return (
    <div id="topLevelRatingsAndReviews">
      <h1>Ratings And Reviews</h1>
      <ReviewsBreakDownContainer/>
      <ReviewsContainer/>
    </div>
  );
};

RatingsAndReviews.propTypes = {};

export default RatingsAndReviews;
