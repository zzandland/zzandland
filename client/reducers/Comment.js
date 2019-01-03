export default (state = [], action) => {
  switch (action.type) {
    case 'GET_BLOG_COMMENTS':
      return action.comments;

    default:
      return state;
  }
}
