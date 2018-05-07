const statisticsReducer = (state = 'noFilter', action) => {
  switch(action.type){
    case 'STATISTICS_FILTER':
      return action.category;
    default: return state;
  }
}

export default statisticsReducer;
