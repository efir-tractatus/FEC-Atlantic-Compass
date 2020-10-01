//import exampleAction from '../actions/example.action.js'
import store from '../store/store.js';
import { connect } from 'react-redux';
import changeProductQuestions from '../actions/changeProductQuestions.js';
import AddQuestionModal from '../components/QuestionsAndAnswers/AddQuestionModal.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        populateQuestions: (productQuestions) => {
          dispatch(changeProductQuestions(productQuestions))
        },
    }
}

var AddQuestionModalContainer = connect(
    null,
    mapDispatchToProps
)(AddQuestionModal)

export default AddQuestionModalContainer;