import React from "react";

var QuestionsAndAnswers = (props) => {
  return (
    <h1>
      <div>Questions And Answers Component</div>
      <div>{props.productQuestions[0].question_body}</div>
      <div>{props.primaryProduct.slogan}</div>
    </h1>
  );
};

QuestionsAndAnswers.propTypes = {};

export default QuestionsAndAnswers;