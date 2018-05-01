const visibilityReducer = (state = 'showAll', action) => {
  switch(action.type){
    case 'VISIBILITY_FILTER':
      return action.category;
    default: return state;
  }
}

export default visibilityReducer;
