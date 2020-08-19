import React from 'react';
import ReactDOM from 'react-dom';
// including redux store
import { createStore } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// 
import reducer from './store/reducer';

// 1.
// creating store
// const store = createStore();
// store will include reducer. as reducer will contain the logic for updating the store. its a convention to carete a seprate file. hence, cea=reating new file: store/reducer

// 2.
const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
