import React from "react";
import AnswerListEntry from "./AnswerListEntry";

var AnswerList = (props) => {
  if (props.answers.length) {
    var numOfAnswers = 2
    var answersToDisplay= [];
    for (let i = 0; i < numOfAnswers; i++) {
      answersToDisplay.push(props.answers[i])
    }

    if (numOfAnswers < props.answers.length) {
      return (
        <div className="answer-list">
          {answersToDisplay.map((currAnswer) => {
            return <AnswerListEntry answer={currAnswer} key={currAnswer.id}/>
          })
          }
          <div className="answer-load-more Q-grid-container">
          <a className="Q-col-2">Load More Answers</a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="answer-list">
          {answersToDisplay.map((currAnswer) => {
            return <AnswerListEntry answer={currAnswer} key={currAnswer.id}/>
          })
          }
        </div>
      );
    }
  } else {
    return (
      <div className="answer-list-default Q-grid-container">
        <p className="Q-col-2">No answers yet...</p>
      </div>
    );
  }
};

AnswerList.propTypes = {};

export default AnswerList;