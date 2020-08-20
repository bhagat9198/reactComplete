const initialSate = {
  counter: 0,
  // adding one more property
  results: []
}

const reducer  = (state = initialSate, action) => {
  switch(action.type) {
    case 'INCREMENT' :
      // now we are having 2 properties. if we do like this then we are missing out 'results' array. but the state we returened should have both teh properties.
      // hence the making copying of objcet and then assigning new value.
      // return {counter: state.counter + 1}

      // creting new empty object which will copy all teh properties from'state' object.  
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case 'DECREMENT' :
      // another way of mutataing the object in immutabel way by using spread operator
      // return {counter: state.counter - 1}
      return {
        ...state,
        // if the 'counter' property is not present, 'counter' property will be added else 'counter' value will be updated.
        counter: state.counter - 1
      }
      // hence, now creating new object and passing the both properties
    case 'ADD' :
      return {
        ...state,
        counter: state.counter + action.val
      }
    case 'SUBTRACT':
      return { 
        ...state,
        counter: state.counter - action.val
      }
    // handling the case for 'STORE_RESULT'
    case 'STORE_RESULT':
      console.log(state.results);
      return {
        ...state,
        // arrays are also refference type. hence, we have to make copy of the array, we cant mutate is directly.
        // to mutate the array in immutable way, we will use 'concat' method
        // concat: its is same like push method. push method will add the element to exisiting array whereas concat will carete the new of the array copying the values from exisiting array.
        // passing the value which should get added
        // results: state.results.concat(state.counter) 

        // as each result will be in seprate list, they shuould contain a unique id  
        results: state.results.concat({id: new Date(), value: state.counter}) 
      }
    default:
    return state
  }
}

export default reducer;
