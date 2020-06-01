import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

// passing the 'props' to our 'App' componenent
ReactDOM.render(<App appTitle='Person Manager' />, document.getElementById('root'));

serviceWorker.unregister(); 
