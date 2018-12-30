const initialState = {
  roleTitle: 'developer',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ROLE_TITLE':
      return {...state, roleTitle: action.roleTitle };

    default:
      return state;
  }
}
