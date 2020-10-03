import React from 'react';
import axios from 'axios';

var AddReviewsModal = (props) => {
  return (
    <div className='placeholder'>
      <p className='modal-header'>Post your Review!</p>
      <p className='modal-sub-header'> {productName}</p>
    </div>
  );
};

let handleSubmit = (productId, recommend, characteristics) => {
  let sentJSON = {};
  let getRating = () => {
    let value = this.state; //something to do with the star rating
    return; //something
  };
  sentJSON.product_id = productId;
  sentJSON.rating = getRating();
  sentJSON.summary = document.getElementById();
  sentJSON.body = document.getElementById();
  sentJSON.recommend = recommend;
  sentJSON.name = document.getElementById();
  sentJSON.email = document.getElementById();
  sentJSON.characteristicsObject = {};
  for (let i = 0; i < characteristics.length; i++) {
    sentJSON.characteristicsObject[
      characteristics[i]
    ] = document.getElementById();
  }

  axios.post(`http://18.224.37.110/reviews`, sentJSON)
};

MoreReviewsModal.prototypes = {};
export default AddReviewsModal;
