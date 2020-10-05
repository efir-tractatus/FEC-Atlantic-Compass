import React from 'react';
import axios from 'axios';

var AddReviewsModal = (props) => {
  return (
    <div className='placeholder'>
      <p className='modal-header'>Post your Review!</p>
      <p className='modal-sub-header'>{productName}</p>
      <form id='placeHolder'>
        <label htmlFor="your-name"></label>
      </form>
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

var checkVaild = () => {
  var body = document.getElementById('your-answer').value;
  var nickname = document.getElementById('answer-nickname').value;
  var email = document.getElementById('answer-email').value;

  if (body.length <= 0) {
    alert('You must enter the following: Answer');
    return false;
  }
  if (nickname.length <= 0) {
    alert('You must enter the following: Nickname');
    return false;
  }
  if (email.length <= 0) {
    alert('You must enter the following: E-mail Address');
    return false;
  }
  if (!validateEmail(email)) {
    alert('Please enter a valid E-mail Address.');
    return false;
  }
  return true;
}

var validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


AddReviewsModal.prototypes = {};
export default AddReviewsModal;
