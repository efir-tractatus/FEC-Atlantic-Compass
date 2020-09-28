import React from "react";

var AnswerListEntry = (props) => {
  var { answer } = props
  return (
    <div className="answer-list-entry Q-grid-container">
      <p className="answer-label Q-col-1">A:</p>
      <div className="answer-body Q-col-2">{answer.body}</div>
      <div className="answer-utility-container Q-col-2">
        <p className="answer-utility-text">by {answer.answerer_name} ,</p>
        <p className="answer-utility-date">{answer.date}</p>
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