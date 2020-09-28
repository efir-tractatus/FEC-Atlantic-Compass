import React from "react";
import QandASearchbar from "./QandASearchbar.jsx";
import QuestionList from "./QuestionList.jsx";

var QuestionsAndAnswers = (props) => {
  return (
    <div className="QandA-widget">
      <h4 className="QandA-primary-header">QUESTIONS & ANSWERS</h4>
      <QandASearchbar />
      <QuestionList questionList={props.productQuestions}/>
    </div>
  );
};

QuestionsAndAnswers.propTypes = {};

export default QuestionsAndAnswers;