import React, { useState, useEffect } from "react";
import ModalTemplate from "../ModalTemplate/ModalTemplate.jsx";
import AddQuestionModalContainer from '../../../containers/QandA/AddQuestionModalContainer.js';
import QuestionListEntryContainer from '../../../containers/QandA/QuestionListEntryContainer.js';
import InteractionTracker from "../../Utility/InteractionTracker.jsx";

var QuestionList = (props) => {
  var searchInput = props.searchInput

  const [isOpen, setIsOpen] = useState(false)
  const [numToDisplay, setNumtoDisplay] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [availableQuestions, setAvailableQuestions] = useState(props.questionList);
  const [questionsToDisplay, setQuestionsToDisplay] = useState(props.questionList);

  useEffect(() => {
    setIsLoading(true)
    var questionList = props.questionList.slice(0);

    if (searchInput.length >= 3) {
      var processedList = questionList.filter((question) => {
        return question.question_body.toLowerCase().includes(searchInput);
      })
    } else {
      var processedList = questionList;
    }

    if (processedList.length > 1) {
      processedList = processedList.sort(sortQuestionsByMostHelpful);
    }

    var displayList = [];

    for (let i = 0; i < numToDisplay; i++) {
      if (processedList[i]) {
        displayList.push(processedList[i]);
      }
    }

    setAvailableQuestions(processedList);
    setQuestionsToDisplay(displayList);
    setIsLoading(false);
  }, [searchInput, numToDisplay])



  if (isLoading === true) {
    return (
    <div className="question-list-default">LOADING QUESTIONS...</div>
    )
  }

  if (availableQuestions.length <= 0) {
    return (
    <div>
      <InteractionTracker widget="QandA" element="Add-a-question"
           render={({ postInteraction }) => (
              <button className="QandA-button-add-question" onClick={() => { postInteraction(); setIsOpen(true) }}>ADD A QUESTION +</button>
            )} />
       {buildAddQuestionModal(isOpen, setIsOpen, props)}
    </div>
    )
  }

  if (numToDisplay < availableQuestions.length) {
    return (
      <div className="question-list">
          {buildQuestionList(questionsToDisplay, props)}
        <div className="button-flex-container">
        <InteractionTracker widget="QandA" element="Load-more-questions"
           render={({ postInteraction }) => (
          <button className="QandA-button-more-questions" onClick={() => {
            postInteraction();
            setNumtoDisplay(numToDisplay + 2);
        }}><p>MORE ANSWERED QUESTIONS</p></button>
          )} />
          <InteractionTracker widget="QandA" element="Add-a-question"
           render={({ postInteraction }) => (
          <button className="QandA-button-add-question" onClick={() => {
            postInteraction();
            setIsOpen(true) }}>
              <p>ADD A QUESTION </p><p className="button-plus">+</p>
          </button>
          )} />
        </div>
        {buildAddQuestionModal(isOpen, setIsOpen, props)}
      </div>
    );
  } else {
    return (
      <div>
        {buildQuestionList(questionsToDisplay, props)}
        <InteractionTracker widget="QandA" element="Add-a-question"
           render={({ postInteraction }) => (
        <button className="QandA-button-add-question" onClick={() => { postInteraction(); setIsOpen(true) }}>ADD A QUESTION +</button>
        )} />
        {buildAddQuestionModal(isOpen, setIsOpen, props)}
      </div>
    );
  }
};

var buildQuestionList = (listOfQuestions, propList) => {
  return listOfQuestions.map((currQuestion) => {
    return <QuestionListEntryContainer question={currQuestion} key={currQuestion.question_id} product={propList.product}/>
  })
}

var buildAddQuestionModal = (isOpen, setIsOpen, propList) => {
  return (
    <ModalTemplate open={isOpen} onClose={() => setIsOpen(false)}>
      <AddQuestionModalContainer productName={propList.product.name} productId={propList.product.id} onClose={() => setIsOpen(false)}/>
    </ModalTemplate>
  )
}

var sortQuestionsByMostHelpful = (question1, question2) => {
  if (question1.question_helpfulness < question2.question_helpfulness) {
    return 1;
  } else if (question1.question_helpfulness > question2.question_helpfulness) {
    return -1;
  } else {
    return 0;
  }
}

QuestionList.propTypes = {};

export default QuestionList;