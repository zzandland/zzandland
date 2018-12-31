const initialState = {
  resumeActiveMenu: 'experience',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_ITEM':
      return { ...state, resumeActiveMenu: action.item };

    default:
      return state;
  }
}
