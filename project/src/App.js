import React from 'react';
import NavbarContainer from './containers/Navigation/NavbarContainer.js';
import Overview from './components/Overview/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswersWidgetContainer from './containers/QandA/QuestionsAndAnswersWidgetContainer.js';
// import Overview from 'overview-module';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App', props);
  }
  render() {
    return (
      <div>
        <NavbarContainer />
        <Overview />
        <QuestionsAndAnswersWidgetContainer />
        <RatingsAndReviews />
      </div>
    );
  }
}

export default App;
