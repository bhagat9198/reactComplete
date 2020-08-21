// adjusting the path
import *  as actionTypes from './../action';

const initialSate = {
  counter: 0

  // only maintain counter state
  // results: []
}

const counterReducer  = (state = initialSate, action) => {
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
    
    // results state will be managed by results counter. hence this code not needed.
    // case actionTypes.STORE_RESULT:
    //   return {
    //     ...state,
    //     results: state.results.concat({id: new Date(), value: state.counter}) 
    //   }
    // case actionTypes.DELETE_RESULT:
    //   const updatedArray = state.results.filter(result => {
    //     if(result.id !== action.resultElId) {
    //       return result;
    //     }
    //   });
    //   return {
    //     ...state,
    //     results: updatedArray
    //   }

    default:
    return state
  }
}

export default counterReducer;
