import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type){
    case ("ADD_QUOTE"):
      return { ...state, quotes: [ ...state.quotes, action.quote] }
    default:
      return state;
  }
    
  
  
}
