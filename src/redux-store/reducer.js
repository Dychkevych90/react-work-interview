const initialState = {
  text: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEXT':
      return {
        ...state,
        text: action.text
      }

    default:
        return state;
  }
}

export default reducer;
