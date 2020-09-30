import React from "react";
import axios from "axios";

var AddAnswerModal = (props) => {
  var {productName, questionBody, questionId, onClose} = props;
  return (
    <div className="QandA-modal-body">
      <p className="modal-header">Submit your Answer</p>
      <p className="modal-sub-header"> {productName}: {questionBody}</p>
      <form>
        <label htmlFor="your-answer">YOUR ANSWER*:</label>
        <br></br>
        <textarea type="text" id="your-answer" name="your-answer" maxLength="1000" required></textarea>
        <br></br>
        <label htmlFor="answer-nickname">WHAT IS YOUR NICKNAME*:</label>
        <br></br>
        <input type="text" id="answer-nickname" name="answer-nickname" maxLength="60" placeholder="Example: jack543!" required></input>
        <br></br>
        <p className="modal-privacy-warning">For privacy reasons, do not use your full name or email address</p>
        <br></br>
        <label htmlFor="answer-email">YOUR E-MAIL*:</label>
        <br></br>
        <input type="text" id="answer-email" name="answer-email" maxLength="60" placeholder="Example: jack@email.com" required></input>
        <br></br>
        <p className="modal-email-warning">For authentication reasons, you will not be emailed</p>
        <br></br>
        <label htmlFor="file-upload">UPLOAD PHOTOS:</label>
        <br></br>
        <input className="QandA-photo-upload" id="uploaded-answer-photos" type="file" name="file-upload" accept="image/*" multiple></input>
        <br></br>
        <input className="QandA-submit" type="submit" value="SUBMIT" onClick={(e) => {
          e.preventDefault();
          handleSubmit(e, questionId);
          onClose(); }}>
        </input>
      </form>
    </div>
  );
};

AddAnswerModal.propTypes = {};

export default AddAnswerModal;

var handleSubmit = (e, id) => {
  var body = document.getElementById('your-answer').value;
  var nickname = document.getElementById('answer-nickname').value;
  var email = document.getElementById('answer-email').value;
  var files = document.getElementById('uploaded-answer-photos').files
  var photos = []
  var questionId = id;

  var files = document.getElementById('uploaded-answer-photos').files
  for (let i = 0; i < files.length; i++) {
    photos.push(files[i]);
  }

  axios.post(`http://18.224.37.110/qa/questions/${questionId}/answers`, {
    'body': body,
    'name': nickname,
    'email': email,
    'photos': photos
  })
  .then((response) => {
    console.log('success', response);
  })
  .catch((err) => {
    console.log('error posting answer', err);
  })
}