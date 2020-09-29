import React, { useState, useEffect } from "react";
import QuestionListEntry from "./QuestionListEntry";
import ModalTemplate from "./ModalTemplate.jsx";
import AddQuestionModal from "./AddQuestionModal.jsx";

var QuestionList = (props) => {
  //modal toggle
  const [isOpen, setIsOpen] = useState(false)

  if (props.questionList.length) {
    var questionList = props.questionList.slice(0);
    questionList.sort(sortQuestionsByMostHelpful);

    const [numToDisplay, setNumtoDisplay] = useState(2);

    var displayList = [];

   for(let i = 0; i < numToDisplay; i++) {
     if (questionList[i]) {
      displayList.push(questionList[i]);
     }
   }

    useEffect(() => {
    setQuestionsToDisplay(displayList);
    }, [numToDisplay])

    const [questionsToDisplay, setQuestionsToDisplay] = useState(displayList);

    if (numToDisplay < props.questionList.length) {
      return (
        <div className="question-list">
            {buildQuestionList(questionsToDisplay, props)}
          <div className="button-flex-container">
            <button className="QandA-button-more-questions" onClick={() => {
            setNumtoDisplay(numToDisplay + 2)}}><p>MORE ANSWERED QUESTIONS</p></button>
            <button className="QandA-button-add-question" onClick={() => setIsOpen(true)}><p>ADD A QUESTION </p><p className="button-plus">+</p></button>
          </div>
          {buildAddAnswerModal(isOpen, setIsOpen, props)}
        </div>
      );
    } else {
      return (
        <div>
          {buildQuestionList(questionsToDisplay, props)}
          <button className="QandA-button-add-question" onClick={() => setIsOpen(true)}>ADD A QUESTION +</button>
          {buildAddAnswerModal(isOpen, setIsOpen, props)}
        </div>
      );
    }
  } else {
    return (
      <div>
        <p className="question-list-default">NO QUESTIONS YET...</p>
        <button className="QandA-button-add-question" onClick={() => setIsOpen(true)}>ADD A QUESTION +</button>
        {buildAddAnswerModal(isOpen, setIsOpen, props)}
      </div>
    )
  }
};

QuestionList.propTypes = {};

export default QuestionList;

var sortQuestionsByMostHelpful = (question1, question2) => {
  if (question1.question_helpfulness < question2.question_helpfulness) {
    return 1;
  } else if (question1.question_helpfulness > question2.question_helpfulness) {
    return -1;
  } else {
    return 0;
  }
}

var buildQuestionList = (listOfQuestions, propList) => {
  return listOfQuestions.map((currQuestion) => {
    return <QuestionListEntry question={currQuestion} key={currQuestion.question_id} productName={propList.product.name}/>
  })
}

var buildAddAnswerModal = (isOpen, setIsOpen, propList) => {
  return (
    <ModalTemplate open={isOpen} onClose={() => setIsOpen(false)}>
      <AddQuestionModal productName={propList.product.name} productId={propList.product.id}/>
    </ModalTemplate>
  )

}