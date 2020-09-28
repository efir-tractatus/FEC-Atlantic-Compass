import React from "react";
import Overview from './components/Overview/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswersWidgetContainer from './containers/QuestionsAndAnswersWidgetContainer.js';
import RelatedItemsAndComparison from './components/RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Overview/>
        <RatingsAndReviews/>
        <QuestionsAndAnswersWidgetContainer/>
        <RelatedItemsAndComparison/>
      </div>
    );
  }
};

export default App;