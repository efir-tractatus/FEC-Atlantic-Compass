import React from "react";
import AnswerList from "./AnswerList.jsx";

//this entry should be mapped from a list of questions in the QuestionList component

var QuestionListEntry = (props) => {
  var { question } = props
  return (
    <div className="question-list-entry">
      <div className="question-body">Q: {question.question_body}</div>
      <AnswerList answers={Object.values(question.answers)}/>
      <div>
        <p>Helpful?</p>
        <a>Yes</a><p>{question.question_helpfulness}</p>
        <p> | </p>
        <a>Add Answer</a>
      </div>
    </div>
  );
};

QuestionListEntry.propTypes = {};

export default QuestionListEntry;