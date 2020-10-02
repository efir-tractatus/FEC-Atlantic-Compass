import React from "react";
import ReviewsBreakDown from "./ReviewsBreakDown.jsx"
import Reviews from "./Reviews.jsx";

var RatingsAndReviews = () => {
  return (
    <h1>
      Ratings And Reviews Component
    </h1>
    <ReviewBreakDown/>
    <Reviews/>
  );
};

RatingsAndReviews.propTypes = {};

export default RatingsAndReviews;