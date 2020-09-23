var defaultState = {
    example: null,
  }
  
  const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(thunk)
    );
  
  export default store;