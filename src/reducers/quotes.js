import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type){
    case ("ADD_QUOTE"):
      return { quotes: state.push(action.quote) }
    default:
      return state;
  }
    
  
  
}
