const initialSate = {
  counter: 0
}

const reducer  = (state = initialSate, action) => {
  // checking the action dispatched
    // type should be exactly same as writen as in counter while dispatching action
  if(action.type === 'INCREMENT') {
    // returing updated state in immutalble way by copying the state. its not require as we have just one property and we are overwriting it 
    return {
      counter: state.counter + 1
    }
  }
  return state;
}

export default reducer;
