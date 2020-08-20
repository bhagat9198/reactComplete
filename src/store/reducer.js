const initialSate = {
  counter: 0
}

const reducer  = (state = initialSate, action) => {
  // 14.12
  // if(action.type === 'INCREMENT') {
  //   return {
  //     counter: state.counter + 1
  //   }
  // } else if(action.type === 'DECREMENT') {
  //   return {
  //     counter: state.counter - 1
  //   }
  // } else if(action.type === 'ADD') {
  //   return {
  //     // using payload values instaed of static values
  //     counter: state.counter + action.val
  //   }
  // } else if(action.type === 'SUBTRACT') {
  //   return {
  //     counter: state.counter - action.val
  //   }
  // }
  // return state;


  // 14.13

  // using switch instaed of elseif
  switch(action.type) {
    case 'INCREMENT' :
      return {counter: state.counter + 1}
    case 'DECREMENT' :
      return {counter: state.counter - 1}
    case 'ADD' :
      return {counter: state.counter + action.val}
    case 'SUBTRACT':
      return { counter: state.counter - action.val}
    default:
    return state
  }
}

export default reducer;
