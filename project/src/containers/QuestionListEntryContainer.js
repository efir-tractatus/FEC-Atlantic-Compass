//import exampleAction from '../actions/example.action.js'
import store from '../store/store.js';
import { connect } from 'react-redux';
import changeProductQuestions from '../actions/changeProductQuestions.js';
import QuestionListEntry from '../components/QuestionsAndAnswers/QuestionListEntry.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        populateQuestions: (productQuestions) => {
          dispatch(changeProductQuestions(productQuestions))
        },
    }
}

var QuestionListEntryContainer = connect(
    null,
    mapDispatchToProps
)(QuestionListEntry)

export default QuestionListEntryContainer;