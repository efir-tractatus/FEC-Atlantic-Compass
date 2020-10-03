var reviewsReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_REVIEWS':
      return action.payload;
    default:
      return state;
  }
};

export default reviewsReducer;