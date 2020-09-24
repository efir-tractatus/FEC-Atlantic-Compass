import React from "react";
import Overview from './components/Overview/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RelatedItemsAndComparison from './components/RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <Overview/>
        <RatingsAndReviews/>
        <QuestionsAndAnswers/>
        <RelatedItemsAndComparison/>
      </>
    );
  }
}

export default App;