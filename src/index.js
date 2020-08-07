import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// removing "https://jsonplaceholder.typicode.com" url from everywhere as its a base url which is used at all the places.
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// setting up common header. 
  // these are simply the general headers which are set for all types of request 
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.common['Header-Test'] = 'Test Pass';
// we set up header for specific request type too, like for 'POST' method request where we we can set the content type.
// no need to set, it by default 
axios.defaults.headers.post['Content-Type'] = 'appliaction/json';
axios.defaults.headers.post['Post-Test'] = 'Test Pass';
// and we can check all these headers in requestConfig

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
