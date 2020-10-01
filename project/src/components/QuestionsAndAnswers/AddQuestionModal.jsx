import React from "react";
import axios from "axios";

var AddQuestionModal = (props) => {
  var {productName, productId, onClose} = props;
  return (
    <div className="QandA-modal-body">
      <p className="modal-header">Ask you quesiton</p>
      <p className="modal-sub-header">About the {productName}</p>
      <form id="submit-question-form">
        <label className="QandA-modal-label" htmlFor="your-question">YOUR QUESTION*:</label>
        <br></br>
        <textarea type="text" id="your-question" name="your-question" maxLength="1000" placeholder="Why did you like the product or not?" required></textarea>
        <br></br>
        <label className="QandA-modal-label" htmlFor="question-nickname">WHAT IS YOUR NICKNAME*:</label>
        <br></br>
        <input type="text" id="question-nickname" name="question-nickname" maxLength="60" placeholder="Example: jackson11!" required></input>
        <br></br>
        <p className="modal-privacy-warning">For privacy reasons, do not use your full name or email address</p>
        <br></br>
        <label className="QandA-modal-label" htmlFor="question-email">YOUR E-MAIL*:</label>
        <br></br>
        <input type="text" id="question-email" name="question-email" maxLength="60" placeholder="Example: jack@email.com"required></input>
        <br></br>
        <p className="modal-email-warning">For authentication reasons, you will not be emailed</p>
        <br></br>
        <input className="QandA-submit" type="submit" value="SUBMIT" onClick={(e) => {
          if (document.getElementById('submit-question-form').checkValidity()) {
            e.preventDefault();
            handleSubmit(e, productId);
            onClose();
          }
        }}>
        </input>
      </form>
    </div>
  );
};

AddQuestionModal.propTypes = {};

export default AddQuestionModal;

var handleSubmit = (e, id) => {
  var body = document.getElementById('your-question').value;
  var nickname = document.getElementById('question-nickname').value;
  var email = document.getElementById('question-email').value;
  var productId = id;
/*
  axios.post(`http://18.224.37.110/qa/questions`, {
    'body': body,
    'name': nickname,
    'email': email,
    'product_id': productId
  })
    .then((response) => {
      console.log('success', response);
    })
    .catch((err) => {
      console.log('error posting question', err);
    })
*/
}