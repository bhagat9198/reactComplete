// requring the files and using the export constants instaed of wroting down strings.

import *  as actionTypes from './action';

const initialSate = {
  counter: 0,
  results: []
}

const reducer  = (state = initialSate, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT :
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT :
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD :
      return {
        ...state,
        counter: state.counter + action.val
      }
    case actionTypes.SUBTRACT:
      return { 
        ...state,
        counter: state.counter - action.val
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}) 
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => {
        if(result.id !== action.resultElId) {
          return result;
        }
      });
      return {
        ...state,
        results: updatedArray
      }

    default:
    return state
  }
}

export default reducer;
