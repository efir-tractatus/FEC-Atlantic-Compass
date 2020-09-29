var defaultState = {
    example: null,
  }
  // const intialCall = axios.get(/catwalk).then((response) => {
  //   defaultState.data = response
  // })

  const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(thunk)
    );

  export default store;