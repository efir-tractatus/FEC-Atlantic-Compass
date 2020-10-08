import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import StarRating from '../StarRatingLogic';
import '../../../dist/stylesheets/RatingsAndReviews.css';

const IndividualReviews = (props) => {
  let data = props.reviewId;
  const [howHelpful, sethowHelpful] = useState(data.helpfulness);
  const [
    checkIfAlreadyPressedHelpful,
    setCheckIfAlreadyPressedHelpful,
  ] = useState(false);
  return (
    <div className='review-existance'>
    <div className="top-of-review">
      <div className='stars'>
        <StarRating number={data.rating}/>
      </div>
      {userNameDiv(data)}
      </div>
      <div className='reviewData'>
        <b className='data-summary'>{data.summary}</b>
        <p className='placeHolder'>{data.body}</p>
      </div>
      {checkIfResponses(data.response)}
      <div className="review-buttons">
        <p className='placeHolder'>Helpful?</p>
        <div
          className='yes-button'
          type='button'
          onClick={() => {
            if (checkIfAlreadyPressedHelpful) {
              return;
            } else {
              let reviewID = data.review_id;
              handleReviewHelpful(reviewID, true);
              setCheckIfAlreadyPressedHelpful(true);
              sethowHelpful((prevCount) => prevCount + 1);
            }
          }}
        >
          Yes
        </div> <div className="seperator">({howHelpful})       </div>
        <div
          className='report-button'
          type='button'
          onClick={() => {
            let reviewID = data.review_id;
            handleReviewHelpful(reviewID, false);
          }}
        >
          Report
        </div>
      </div>
    </div>
  );
};

const checkIfResponses = (data) => {
  if (data !== null && data.length > 0) {
    return (
      <div className='placeHolder'>
        <p className='placeHolder'>Response:</p>
        <p className='placeHolder'>${data}</p>
      </div>
    );
  } else {
    return;
  }
};


const userNameDiv = (data) => {
  let formattedDate = moment(data.date).format('MMMM D, YYYY')
  let checkMark = false;
  if (data.reccomend === 1) {
    checkMark = true;

    // NEED TO ADD FUNCTIONALITY TO LINE 83
  }

  if (data.reviewer_name) {
    return (
      <div className="review-user">
        <p className="userNameText">
          {data.reviewer_name}, {formattedDate}
        </p>
      </div>
    );
  }

  if (!data.reviewer_name) {
    return (
      <div className="review-user">
        <p className="userNameText">cognito, {formattedDate}</p>
      </div>
    );
  }
};

const handleReviewHelpful = (reviewID, trueOrFalse) => {
  if (trueOrFalse) {
    axios
      .put(`http://18.224.37.110/reviews/${reviewID}/helpful`)
      .then((response) => {
        console.log('success', response);
      })
      .catch((err) => {
        console.log('error marking answer helpful', err);
      });
  }
  if (!trueOrFalse) {
    axios
      .put(`http://18.224.37.110/reviews/${reviewID}/report/`)
      .then((response) => {
        console.log('success', response);
      })
      .catch((err) => {
        console.log('error marking answer helpful', err);
      });
  }
};

IndividualReviews.propTypes = {};

export default IndividualReviews;
