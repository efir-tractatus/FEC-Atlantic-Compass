import React from "react";
import NavbarContainer from './containers/Navigation/NavbarContainer.js';
import Overview from './components/Overview/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswersWidgetContainer from './containers/QandA/QuestionsAndAnswersWidgetContainer.js';
import RelatedItemsAndComparison from './components/RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <Overview/>
        <QuestionsAndAnswersWidgetContainer/>
        <RatingsAndReviews/>
      </div>
    );
  }
};

export default App;