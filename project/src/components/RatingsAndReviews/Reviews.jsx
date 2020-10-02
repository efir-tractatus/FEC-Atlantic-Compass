import React from "react";
import IndividualReviews from "./IndividualReviews.jsx"


const Reviews = (props) => {
  return (
  <IndividualReviews reviewData={props.results[0]}/>
  <IndividualReviews reviewData={props.results[1]}/>
  <div className="placeHolder" type="button" onClick={

  }>
  </div>
  )
}



Reviews.prototypes = {};

export default Reviews;