import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// to combine the reducers, importing helper method
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import reducer from './store/reducer';
// 
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';


// combineReducers: its a function which takes a js object as input mapping our reducers to different slices of our state as inpput and merge everything into one state and oen reducer
const rootReducer = combineReducers({
  // mapping our reducers
  ctr: counterReducer,
  res: resultsReducer
})


// const store = createStore(reducer);
// passing one main root reducer to store atlast
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


