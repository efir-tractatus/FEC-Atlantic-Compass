import React, { useState, useEffect } from "react";
import axios from "axios";
import AnswerList from "../AnswerList/AnswerList.jsx";
import ModalTemplate from "../ModalTemplate/ModalTemplate.jsx";
import AddAnswerModalContainer from '../../../containers/QandA/AddAnswerModalContainer.js';
import InteractionTracker from "../../Utility/InteractionTracker.jsx";


//this entry should be mapped from a list of questions in the QuestionList component

var QuestionListEntry = (props) => {
  //modal toggle
  const [isOpen, setIsOpen] = useState(false)

  var { question, product, populateQuestions } = props

  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [isMarkedHelpful, setIsMarkedHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);

  return (
    <div className="question-list-entry">
      <div className="Q-grid-container">
        <div className="question-label Q-col-1">Q:</div>
        <div className="question-body Q-col-2">{question.question_body}</div>
        <div className="question-utility-container Q-col-3">
          <p className="question-utility-text">Helpful?</p>
          <InteractionTracker widget="QandA" element="Mark-question-helpful"
           render={({ postInteraction }) => (
          <a className="question-utility-link" onClick={(e) => {
            if (!isMarkedHelpful) {
              setHelpfulness(helpfulness + 1);
              setIsMarkedHelpful(true);
              e.target.innerHTML = 'Thanks!';
              postInteraction();
              postHelpfulness(question.question_id, product.id, populateQuestions);
            }
          }
        }>Yes</a>
        )} />
          <p className="question-utility-count">({helpfulness})</p>
          <p className="question-utility-break">|</p>
          <InteractionTracker widget="QandA" element="Report-question"
           render={({ postInteraction }) => (
          <a className="question-utility-link" onClick={(e) => {
            if (!isReported) {
              setIsReported(true);
              e.target.innerHTML = 'Reported!';
              postInteraction();
              postReported(question.question_id, product.id, populateQuestions);
            }
          }}>Report</a>
        )} />
        </div>
        <div className="question-utility-container Q-col-3">
          <InteractionTracker widget="QandA" element="Add-an-answer"
           render={({ postInteraction }) => (
            <a className="question-utility-link" onClick={() => { postInteraction(); setIsOpen(true);}}>Add Answer</a>
           )} />
        </div>
      </div>
      <AnswerList answers={Object.values(question.answers)} product={product}/>
      <ModalTemplate open={isOpen} onClose={() => setIsOpen(false)}>
          <AddAnswerModalContainer questionBody={question.question_body} questionId={question.question_id} onClose={() => setIsOpen(false)}/>
      </ModalTemplate>
    </div>
  );
};

var postHelpfulness = (id, productId, populateQuestions) => {
  axios.put(`http://18.224.37.110/qa/questions/${id}/helpful`)
    .then((response) => {
      console.log('success', response);
    })
    .catch((err) => {
      console.log('error marking question helpful', err);
    })
    .then(() => {
      return axios.get(`http://18.224.37.110/qa/questions/?product_id=1&count=20`)
    })
    .then((response) => {
      populateQuestions(response.data.results);
    })
    .catch((err) => {
      console.log('error getting new question list', err);
    })
}

var postReported = (id, productId, populateQuestions) => {
  axios.put(`http://18.224.37.110/qa/questions/${productId}/report`)
    .then((response) => {
    console.log('success', response);
    })
    .catch((err) => {
      console.log('error reporting question', err);
    })
    .then(() => {
      return axios.get(`http://18.224.37.110/qa/questions/?product_id=${productId}&count=20`)
    })
    .then((response) => {
      populateQuestions(response.data.results);
    })
    .catch((err) => {
      console.log('error getting new question list', err);
    })
}

QuestionListEntry.propTypes = {};

export default QuestionListEntry;