import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

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
