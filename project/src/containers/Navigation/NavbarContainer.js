//import exampleAction from '../actions/example.action.js'
import store from '../../store/store.js';
import { connect } from 'react-redux';
import changePrimaryProduct from '../../actions/changePrimaryProduct.js';
import changeProductQuestions from '../../actions/changeProductQuestions.js';
import changeStyle from '../../actions/changeStyle.js';
import changeAllStyles from '../../actions/changeAllStyles.js';
import Navbar from '../../components/Navigation/Navbar.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        updatePrimaryProduct: (product) => {
          dispatch(changePrimaryProduct(product))
        },
        updateQuestions: (productQuestions) => {
          dispatch(changeProductQuestions(productQuestions))
        },
        updateStyles: (newStyles) => {
          dispatch(changeAllStyles(newStyles))
        },
        updateCurrentStyle: (newStyle) => {
          dispatch(changeStyle(newStyle))
        }
    }
}

var NavbarContainer = connect(
    null,
    mapDispatchToProps
)(Navbar)

export default NavbarContainer;