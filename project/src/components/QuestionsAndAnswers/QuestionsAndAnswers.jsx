import React from "react";

var QuestionsAndAnswers = (props) => {
  return (
    <h1>
      <div>Questions And Answers Component</div>
      <div>{props.productQuestions[0].question_body}</div>
    </h1>
  );
};

QuestionsAndAnswers.propTypes = {};

export default QuestionsAndAnswers;