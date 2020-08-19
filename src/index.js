import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// 
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const store = createStore(reducer);

// ReactDOM.render(<App />, document.getElementById('root'));
// warpping our 'App' with Provider component.
// its a helping component which helps to inject our store inro react components
// thus, we need to pass our 'store' as props.
// props name will be 'store', its predefined. 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// thus redux store is connected to our application.
// now, how to get the data from store? containers/Counter/Counter
registerServiceWorker();


