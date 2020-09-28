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
        <div>
          <div>
            {answersToDisplay.map((currAnswer) => {
              return <AnswerListEntry answer={currAnswer} key={currAnswer.id}/>
            })
            }
          </div>
          <a>Load More Answers</a>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            {answersToDisplay.map((currAnswer) => {
              return <AnswerListEntry answer={currAnswer} key={currAnswer.id}/>
            })
            }
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <div>No answers yet...</div>
      </div>
    );
  }
};

AnswerList.propTypes = {};

export default AnswerList;