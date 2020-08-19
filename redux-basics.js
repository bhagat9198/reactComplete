const redux = require('redux');

const inilialState = {
  counter: 0
}

const createStore = redux.createStore;
const rootReducer = (state = inilialState, action) => {
  if(action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if(action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
}

const store = createStore(rootReducer);
console.log(store.getState());

// 2.
// store.subscribe(() => {
//   console.log('Subscriptions', store.getState());
// });

// output:
// { counter: 0 }
// Subscriptions { counter: 1 }
// Subscriptions { counter: 11 }
// { counter: 11 }
// as soon as our actions will dispatch, subscription will execute and once all the actions have been dispatched, rest of the code will execute.

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());


// // 1.
// // subscriptions
// // subscriptions make sure that we manually dont need to call getStore() function. it should be called automically as soon as our store state changes.

// // subscribe(): it will execute whenever state changes, ie whenever action reaches reducer. it takes a fuction as a argument and that fuction diesnt take any arg

// store.subscribe(() => {
//   // here we can write any code which should be execute on state change
//   console.log('subscriptions', store.getState());
// });
// // subscibtion is placed just below the store and above the actions dispatched.



