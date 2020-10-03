import React, { useState, useEffect } from "react";
import QuestionList from "../QuestionList/QuestionList.jsx";

var QuestionsAndAnswers = (props) => {
  const [searchInput, setSearchInput] = useState('');

  const [searchInputPassed, setSearchInputPassed] = useState('');

  useEffect(() => {
    if (searchInput.length >= 3) {
      setSearchInputPassed(searchInput.toLowerCase());
    }
    if (searchInputPassed.length >= 3 && searchInput.length < 3) {
      setSearchInputPassed(searchInput.toLowerCase());
    }
  }, [searchInput])

  return (
    <div className="QandA-widget">
      <h4 className="QandA-primary-header">QUESTIONS & ANSWERS</h4>
      <div className="QandA-searchbar-container">
        <input className="QandA-searchbar" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}>
        </input>
      </div>
      <div className="QandA-question-list-container">
        <QuestionList questionList={props.productQuestions} product={props.primaryProduct} searchInput={searchInputPassed} />
      </div>
    </div>
  );
};

QuestionsAndAnswers.propTypes = {};

export default QuestionsAndAnswers;