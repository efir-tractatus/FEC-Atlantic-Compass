import React from "react";
import QuestionListEntry from "./QuestionListEntry";

var QuestionList = (props) => {
  if (props.questionList.length) {
    var numOfQuestions = 2
    var questionsToDisplay= [];
    for (let i = 0; i < numOfQuestions; i++) {
      questionsToDisplay.push(props.questionList[i])
    }
    if (numOfQuestions < props.questionList.length) {
      return (
        <div className="question-list">
            {questionsToDisplay.map((currQuestion) => {
              return <QuestionListEntry question={currQuestion} key={currQuestion.question_id}/>
            })
            }
          <div className="button-flex-container">
            <button className="QandA-button-more-questions"><p>MORE ANSWERED QUESTIONS</p></button>
            <button className="QandA-button-add-question"><p>ADD A QUESTION </p><p className="button-plus">+</p></button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {questionsToDisplay.map((currQuestion) => {
            return <QuestionListEntry question={currQuestion} key={currQuestion.question_id}/>
          })
          }
          <button className="QandA-button-add-question">ADD A QUESTION +</button>
        </div>
      );
    }
  } else {
    return (
      <div>
        <p className="question-list-default">NO QUESTIONS YET...</p>
        <button className="QandA-button-add-question">ADD A QUESTION +</button>
      </div>
    )
  }
};

QuestionList.propTypes = {};

export default QuestionList;