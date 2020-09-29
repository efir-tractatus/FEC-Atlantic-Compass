import React, { useState, useEffect } from "react";
import AnswerListEntry from "./AnswerListEntry";

var AnswerList = (props) => {
  if (props.answers.length) {
    var answerList = props.answers.slice(0);
    answerList.sort(sortAnswersByMostHelpful);

    const [numToDisplay, setNumtoDisplay] = useState(2);

    var displayList = [];

   for(let i = 0; i < numToDisplay; i++) {
     if (answerList[i]) {
      displayList.push(answerList[i]);
     }
   }

    useEffect(() => {
    setAnswersToDisplay(displayList);
    }, [numToDisplay])

    const [answersToDisplay, setAnswersToDisplay] = useState(displayList);

    if (numToDisplay < props.answers.length) {
      return (
        <div className="answer-list">
          {answersToDisplay.map((currAnswer) => {
            return <AnswerListEntry answer={currAnswer} key={currAnswer.id}/>
          })
          }
          <div className="answer-load-more Q-grid-container">
          <a className="Q-col-2" onClick={() => {
            setNumtoDisplay(numToDisplay + 2)}}>Load More Answers</a>
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

var sortAnswersByMostHelpful = (answer1, answer2) => {
  if (answer1.helpfulness < answer2.helpfulness) {
    return 1;
  } else if (answer1.helpfulness > answer2.helpfulness) {
    return -1;
  } else {
    return 0;
  }
}