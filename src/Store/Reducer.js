const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROGRESS': return { ...state, progress: action.payload }
    default: return state;
  }
}

export default Reducer;