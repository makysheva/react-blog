const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case 'REMOVE_POST':
      return {
        ...state,
        posts: state.posts.filter((obj) => obj.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
