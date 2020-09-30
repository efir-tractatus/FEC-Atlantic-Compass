import React from "react";
import moment from 'moment';

var AnswerListEntry = (props) => {
  var { answer } = props
  var date = answer.date
  var formattedDate = moment(date).format('MMMM D, YYYY')

  if (answer.photos.length) {
  var photoList = (
  <div className="answer-photo-gallery Q-col-2">
    {answer.photos.map((photo) =>{
      return <img className="answer-images" src={photo} alt="User Submitted Product Photo" key={photo}></img>
    })}
  </div>
  )
  } else {
    var photoList = null
  }

  return (
    <div className="answer-list-entry Q-grid-container">
      <p className="answer-label Q-col-1">A:</p>
      <div className="answer-body Q-col-2">{answer.body}</div>
      {photoList}
      <div className="answer-utility-container Q-col-2">
        <p className="answer-utility-text">by {answer.answerer_name} ,</p>
        <p className="answer-utility-date">{formattedDate}</p>
        <p className="answer-utility-break">|</p>
        <p className="answer-utility-text">Helpful?</p>
        <a className="answer-utility-link">Yes</a>
        <p className="answer-utility-count">({answer.helpfulness})</p>
        <p className="answer-utility-break">|</p>
        <a className="answer-utility-link">Report</a>
      </div>
    </div>
  );
};

AnswerListEntry.propTypes = {};

export default AnswerListEntry;