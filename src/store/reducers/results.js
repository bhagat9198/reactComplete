import *  as actionTypes from './../action';

const initialSate = {
  // counter: 0,
  results: []
}

const resultsReducer  = (state = initialSate, action) => {
  switch(action.type) {
    // removing counter realated code
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // still accessing 'state.counter' as both the reducers will be combined into oen global state.

        // now we are not able to see stored result number. this is because stored result is undefined.
        // as we are trying to access 'counter' property which is not present. 
          // "state.ctr.counter" : still will not able to access the counter property and this is because in resultsReducer(subreducer) we dont have access to global reducer hence cant access 'state'.
        
          // thus, to get the value of counter, we should get it through action payload
        // results: state.results.concat({id: new Date(), value: state.counter}) 
        results: state.results.concat({id: new Date(), value: action.result}) 
        // to, receive action.result, configuring Counter action
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

export default resultsReducer;
