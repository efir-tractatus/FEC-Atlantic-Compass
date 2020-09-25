import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';



var store = {};

function initializeStore(callback) {
  return axios.get('/catwalk')
    .then((response) => {
      console.log(response)
      var data = response.data;
      var defaultState = {
        primaryProduct: data.primaryProduct,
        currentStyles: data.primaryProductStyles.results,
        currentStyle: data.primaryProductStyles.results[0],
        currentImages: data.primaryProductStyles.results[0].photos,
        currentImage: data.primaryProductStyles.results[0].photos[0],
        relatedProducts: data.relatedProducts,
        //tbd savedOutfits
        questionSearchbarInput: '',
        productQuestions: data.primaryProductionQuestions.results,
        questionsAmount: 2,
        sortingMethod: 'relevance',
        reviews: data.primaryProductReviews.results,
        primaryProductMetadata: data.primaryProductReviewsNumbers
      }

      store = createStore(
        rootReducer,
        defaultState,
        applyMiddleware(thunk)
        );
    })
    .then(() => {
      callback();
    })
    .catch((err) => {
      console.log('error creating the store', err);
    })
}

export {store, initializeStore};