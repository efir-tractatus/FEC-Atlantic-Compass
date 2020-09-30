import React, { useState, useEffect } from "react";
import AnswerList from "./AnswerList.jsx";
import ModalTemplate from "./ModalTemplate.jsx";
import AddAnswerModal from "./AddAnswerModal.jsx";

//this entry should be mapped from a list of questions in the QuestionList component

var QuestionListEntry = (props) => {
  //modal toggle
  const [isOpen, setIsOpen] = useState(false)

  var { question, productName } = props

  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [isMarkedHelpful, setIsMarkedHelpful] = useState(false);

  return (
    <div className="question-list-entry">
      <div className="Q-grid-container">
        <div className="question-label Q-col-1">Q:</div>
        <div className="question-body Q-col-2">{question.question_body}</div>
        <div className="question-utility-container Q-col-3">
          <p className="question-utility-text">Helpful?</p>
          <a className="question-utility-link" onClick={(e) => {
            if (!isMarkedHelpful) {
              setHelpfulness(helpfulness + 1);
              setIsMarkedHelpful(true);
              e.target.innerHTML = 'Thanks!';
              postHelpfulness();
            }
          }
        }>Yes</a>
          <p className="question-utility-count">({helpfulness})</p>
          <p className="question-utility-break">|</p>
          <a className="question-utility-link" onClick={() => setIsOpen(true)}>Add Answer</a>
        </div>
      </div>
      <AnswerList answers={Object.values(question.answers)}/>
      <ModalTemplate open={isOpen} onClose={() => setIsOpen(false)}>
          <AddAnswerModal productName={productName}  questionBody={question.question_body} questionId={question.question_id} onClose={() => setIsOpen(false)}/>
      </ModalTemplate>
    </div>
  );
};

QuestionListEntry.propTypes = {};

export default QuestionListEntry;

var postHelpfulness = () => {

}