import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// lets say in application, different different urls are being used. at that time we cant use baseURL as default.
// thus, in that case we can do Half measure, ie axios provide new feature called 'instances'. 
  // creating the new file 'axios.js' on root level.

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.common['Header-Test'] = 'Test Pass';
axios.defaults.headers.post['Content-Type'] = 'appliaction/json';
axios.defaults.headers.post['Post-Test'] = 'Test Pass';

axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig);
  return requestConfig;
}, error => {
  // console.log(error);
  return Promise.reject(error);
})

axios.interceptors.response.use(responseConfig => {
  // console.log(responseConfig);
  return responseConfig;
}, error => {
  // console.log(error);
  return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
