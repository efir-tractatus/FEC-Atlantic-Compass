import React, { useState, useEffect } from "react";
import QuestionListEntry from "./QuestionListEntry";
import ModalTemplate from "./ModalTemplate.jsx";
import AddQuestionModal from "./AddQuestionModal.jsx";

var QuestionList = (props) => {
  console.log('Question list recieved:', props.questionList)
  console.log('Search input recieved:', props.searchInput)
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
        return question.question_body.toLowerCase().includes(searchInput.toLowerCase());
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
      <button className="QandA-button-add-question" onClick={() => setIsOpen(true)}>ADD A QUESTION +</button>
      {buildAddQuestionModal(isOpen, setIsOpen, props)}
    </div>
    )
  }

  if (numToDisplay < availableQuestions.length) {
    return (
      <div className="question-list">
          {buildQuestionList(questionsToDisplay, props)}
        <div className="button-flex-container">
          <button className="QandA-button-more-questions" onClick={() => {
          setNumtoDisplay(numToDisplay + 2)}}><p>MORE ANSWERED QUESTIONS</p></button>
          <button className="QandA-button-add-question" onClick={() => setIsOpen(true)}><p>ADD A QUESTION </p><p className="button-plus">+</p></button>
        </div>
        {buildAddQuestionModal(isOpen, setIsOpen, props)}
      </div>
    );
  } else {
    return (
      <div>
        {buildQuestionList(questionsToDisplay, props)}
        <button className="QandA-button-add-question" onClick={() => setIsOpen(true)}>ADD A QUESTION +</button>
        {buildAddQuestionModal(isOpen, setIsOpen, props)}
      </div>
    );
  }
};

QuestionList.propTypes = {};

export default QuestionList;

var buildQuestionList = (listOfQuestions, propList) => {
  return listOfQuestions.map((currQuestion) => {
    return <QuestionListEntry question={currQuestion} key={currQuestion.question_id} productName={propList.product.name}/>
  })
}

var buildAddQuestionModal = (isOpen, setIsOpen, propList) => {
  return (
    <ModalTemplate open={isOpen} onClose={() => setIsOpen(false)}>
      <AddQuestionModal productName={propList.product.name} productId={propList.product.id}/>
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