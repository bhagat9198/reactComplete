// // 1.

// const redux = require('redux');

// const inilialState = {
//   counter: 0
// }

// const createStore = redux.createStore;
// const rootReducer = (state = inilialState, action) => {
//   return state;
// }

// const store = createStore(rootReducer);
// console.log(store.getState());

// // dispatching the action
// // action is dispatched on 'store'
// // dispatch: its a function which takes action as an argument. argument will be object which needs to have 'type' property (as it will be helpful in reducer) followed by the payload
// // 'type' is some unique identifier(any name)
//   // convetion: use uppercase string
// // payload can be another object or it can just be a another property within main object
// store.dispatch({type: 'INC_COUNTER'});
// // adding extra ag with type
// store.dispatch({type: 'ADD_COUNTER', value: 10});
// console.log(store.getState());
// // output:
// // { counter: 0 }
// // { counter: 0 }

// // still we goy counter = 0, this is becasue we didint added any logic to our reducer. 




// 2.

const redux = require('redux');

const inilialState = {
  counter: 0
}

const createStore = redux.createStore;
const rootReducer = (state = inilialState, action) => {
  // adding the logic to reducer for different actions
  if(action.type === 'INC_COUNTER') {
    // this is wrong way as we are mutating the original object
    // state.counter++;
    // return state;
    
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  // similarly, second
  if(action.type === 'ADD_COUNTER') {
    return {
      ...state,
      // as we have defined value property to action.
      counter: state.counter + action.value
    }
  }
  return state;
}

const store = createStore(rootReducer);
console.log(store.getState());

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

// output:
// { counter: 0 }
// { counter: 11 }