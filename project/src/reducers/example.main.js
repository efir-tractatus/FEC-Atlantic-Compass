const { default: exampleReducer } = require('./example.reducer');

var rootReducer = combineReducers({
  examples: exampleReducer,
});

export default rootReducer;
