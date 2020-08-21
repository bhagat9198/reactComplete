const initialSate = {
  counter: 0,
  results: []
}

const reducer  = (state = initialSate, action) => {
  switch(action.type) {
    case 'INCREMENT' :
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case 'DECREMENT' :
      return {
        ...state,
        counter: state.counter - 1
      }
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
    case 'STORE_RESULT':
      // console.log(state.results);
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}) 
      }
    // adding the case for delete
    case 'DELETE_RESULT':
      // // to delete the data form array, we should know which know the index.
      // // 1.way of deleting
      // const id = 2 //just for eg
      // // slice method will delete the data from given index but it mutate the original array. hence, silce should be put ob new copy of an array
      // // new copy of array can be careted with spared operator. but objecats within this array are still reffernce types but that doesnt matter for this case as are just removing the object.
      // const newArray = [...state.results];
      // newArray.slice(id, 1);


      // 2 way: using filter method which creates the new copy of the array.
      // while dispatching the action, we will pass the property 'resultElId' which will contain the key.
      // console.log(action.resultElId);
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
