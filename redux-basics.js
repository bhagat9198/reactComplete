
//  // 1.

// // showing the working of redux
// // creating store
// // dispatching action
// // subscription

// // not importing like this. this syntax is used when we want write client side JS
// // import redux from 'redux'

// // using server side syntax
// const redux = require('redux');

// // creating store 
// // createStore: its a function, but not executing the function
// const createStore = redux.createStore;

// // store
// // storing the the store in a varaible 'store'
// // const store = createStore(); 
// // we have to inilize the store and for that we need to have reducer will inilize it

// // rn, we just just have a store. it should be inilized with the reducer as reducer is strongly connected to store. it will only update the state in the end.


// // reducer
// // it will be just a function which will takes 2 arguments
//   // 1arg: current state
//   // 2arg: action
//   // and then function will return the updated state
// // const rootReducer = function(state, action) {}
// // or
// const rootReducer = (state, action) => {
//   // returning the old state
//   return state;
//   // thus, its valid reducer but does nothing.
// }

// // once, reducer is set now we can use as an argumemnt and inilize our store
// const store = createStore(rootReducer);
// // thus, now we have inilized our store. but this store will hold the undefined state

// // to see oour state in store
// // getState: its  function which should be called to extract the state form store 
// console.log(store.getSate());

// // executing the file:
// // we will get 'undefined' as output 

/////////////////////////////////////////////////////////////

// 2.

const redux = require('redux');

// rn, we are getting 'undefined' as we have not inilized our state.
// creating our state. 
  // state can be anything a number, string, etc

const inilialState = {
  counter: 0
};

const createStore = redux.createStore;

// using es6: inilizing state with default value of value is not defined ie undefined. 
// state = inilialState : this will be the case for 1st tym when reducer will run afterwards we will have a state which will be updated by rootrReducer. 
const rootReducer = (state = inilialState, action) => {
  return state;
}

const store = createStore(rootReducer);

console.log(store.getState());
// now we are getting the state as:
// { counter: 0 }

