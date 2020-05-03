import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// instead of sending "App" component, we can render normal html to DOM but then there will be no use of react
// ReactDOM.render(<h1>React App</h1>, document.getElementById('root'));

// we can even use multiple react render to render html code but tahts not a way. there there will be one root react componenet(in our case its 'App') and within sub react components. 

serviceWorker.unregister();
