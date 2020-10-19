import { combineReducers } from 'redux';
import primaryProductReducer from './primaryProductReducer.js';
import currentStylesReducer from './currentStylesReducer.js';
import currentStyleReducer from './currentStyleReducer.js';
import productQuestionsReducer from './productQuestionsReducer.js';
import sortingMethodReducer from './sortingMethodReducer.js';
import reviewsReducer from './reviewsReducer.js';
import primaryProductMetadataReducer from './primaryProductMetadataReducer.js';

var rootReducer = combineReducers({
  primaryProduct: primaryProductReducer,
  currentStyles: currentStylesReducer,
  currentStyle:  currentStyleReducer,
  productQuestions: productQuestionsReducer,
  sortingMethod: sortingMethodReducer,
  reviews: reviewsReducer,
  primaryProductMetadata: primaryProductMetadataReducer
});

export default rootReducer;