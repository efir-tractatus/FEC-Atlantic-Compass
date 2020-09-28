var currentStylesReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_STYLES':
      return action.payload;
    default:
      return state;
  }
};

export default currentStylesReducer;