import React, { useState, useEffect } from "react";
import moment from 'moment';

var AnswerListEntry = (props) => {
  var { answer } = props
  var date = answer.date
  var formattedDate = moment(date).format('MMMM D, YYYY')
  var photoList = buildPhotoList(answer.photos)

  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [isMarkedHelpful, setIsMarkedHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);

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
        <a className="answer-utility-link" id="answer-helpful" onClick={(e) => {
            if (!isMarkedHelpful) {
              setHelpfulness(helpfulness + 1);
              setIsMarkedHelpful(true);
              e.target.innerHTML = 'Thanks!';
              postHelpfulness();
            }
          }
        }>Yes</a>
        <p className="answer-utility-count">({helpfulness})</p>
        <p className="answer-utility-break">|</p>
        <a className="answer-utility-link" onClick={(e) => {
            if (!isReported) {
              setIsReported(true);
              e.target.innerHTML = 'Reported!';
              postReported();
            }
          }
        }>Report</a>
      </div>
    </div>
  );
};

AnswerListEntry.propTypes = {};

export default AnswerListEntry;

var buildPhotoList = (photoArray) => {
  if (photoArray.length) {
    return (
    <div className="answer-photo-gallery Q-col-2">
      {photoArray.map((photo) =>{
        return <img className="answer-images" src={photo} alt="User Submitted Product Photo" key={photo}></img>
      })}
    </div>
    )
  } else {
    return null
  }
}

var postHelpfulness = () => {

}

var postReported = () => {

}