const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LAST_NAME': 
      return {...state, user: action.payload.user }
    default:
      return state;
  }
}

export default reducer;