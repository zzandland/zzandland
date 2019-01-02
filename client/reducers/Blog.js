const initialState = {
  posts: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_BLOG_POSTS':
      return { ...state, posts: action.posts };

    default:
      return state;
  }
}
