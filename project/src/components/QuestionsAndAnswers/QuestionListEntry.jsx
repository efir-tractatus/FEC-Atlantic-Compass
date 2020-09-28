import React from "react";
import AnswerList from "./AnswerList.jsx";

//this entry should be mapped from a list of questions in the QuestionList component

var QuestionListEntry = (props) => {
  var { question } = props
  return (
    <div className="question-list-entry">
      <div className="Q-grid-container">
        <div className="question-label Q-col-1">Q:</div>
        <div className="question-body Q-col-2">{question.question_body}</div>
        <div className="question-utility-container Q-col-3">
          <p className="question-utility-text">Helpful?</p>
          <a className="question-utility-link">Yes</a>
          <p className="question-utility-count">({question.question_helpfulness})</p>
          <p className="question-utility-break">|</p>
          <a className="question-utility-link">Add Answer</a>
        </div>
      </div>
      <AnswerList answers={Object.values(question.answers)}/>
    </div>
  );
};

QuestionListEntry.propTypes = {};

export default QuestionListEntry;