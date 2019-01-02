export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SELF_BIO':
      return action.bio;

    default:
      return state;
  }
}
