const initialSate = {
  counter: 0
}

const reducer  = (state = initialSate, action) => {
  if(action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  } else if(action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  } else if(action.type === 'ADD') {
    return {
      counter: state.counter + 10
    }
  } else if(action.type === 'SUBTRACT') {
    return {
      counter: state.counter - 10
    }
  }
  return state;
}

export default reducer;
