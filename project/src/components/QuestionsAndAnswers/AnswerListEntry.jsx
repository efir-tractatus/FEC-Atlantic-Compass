import React, { useState, useEffect } from "react";
import AnswerPhotoEntry from './AnswerPhotoEntry.jsx';
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
              postHelpfulness(answer.id);
            }
          }
        }>Yes</a>
        <p className="answer-utility-count">({helpfulness})</p>
        <p className="answer-utility-break">|</p>
        <a className="answer-utility-link" onClick={(e) => {
            if (!isReported) {
              setIsReported(true);
              e.target.innerHTML = 'Reported!';
              postReported(answer.id);
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
        return <AnswerPhotoEntry photo={photo} key={photo}/>
      })}
    </div>
    )
  } else {
    return null
  }
}

var postHelpfulness = (id) => {
  // axios.put(`http://18.224.37.110/qa/answers/${id}/helpful`)
    // .then((response) => {
    //   console.log('success', response);
    // })
    // .catch((err) => {
    //   console.log('error marking answer helpful', err);
    // })
}

var postReported = (id) => {
  // axios.put(`http://18.224.37.110/qa/answers/${id}/report`)
  //   .then((response) => {
  //   console.log('success', response);
  //   })
  //   .catch((err) => {
  //     console.log('error reporting answer', err);
  //   })
}