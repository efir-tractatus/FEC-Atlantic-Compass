import React from "react";

var AnswerListEntry = (props) => {
  var { answer } = props
  return (
    <div>
      <div>A: {answer.body}</div>
      <div>
        <p>by {answer.answerer_name}, {answer.date}</p>
        <p> |  Helpful?</p>
        <a>Yes</a><p>{answer.helpfulness}</p>
        <p> | </p>
        <a>Report</a>
      </div>
    </div>
  );
};

AnswerListEntry.propTypes = {};

export default AnswerListEntry;