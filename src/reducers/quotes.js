import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type){
    case ("ADD_QUOTE"):
      return state.push(action.quote)
    default:
      return state;
  }
    
  
  
}
