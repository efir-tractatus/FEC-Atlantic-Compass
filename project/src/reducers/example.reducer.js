var exampleReducer = (state, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return action.payload;
    default:
      return state;
  }
};

export default exampleReducer;