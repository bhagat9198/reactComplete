import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// this is the file, which is wrapping our whole application, thus here we can excute our request/response function globally.
// this can be done by interceptors in axiom.
  // interceptors: these are the function which are defined gloabally which will be excuted for every request leaving the app and every response returning to our app.
  // these basically used to set some common header like authorization or handle errors globally, etc.
import axios from 'axios';

// interceptors: object attached to axios
// request: object attached to interceptors
// use() : to register new interceptors. 
  // it takes a 2 functions
    // 1st: input fun. which recieves the request configration
    // 2nd: error fun if any error occurs which sending the request or recieving the response such as internet failer,etc.
axios.interceptors.request.use(requestConfig => {
  // to see how interceptors looks
  console.log(requestConfig);

  // in interceptors, we always have to return the requestConfig/responseConfig else req/res will be blocked.

  // before we return the req/res, we can edit it also
  return requestConfig;
}, error => {
  console.log(error);
  // we need to return our error also so that still we can forward our request to app in component where we can handle it in catch block
  return Promise.reject(error);
})


// inceptors for handling responses
axios.interceptors.response.use(responseConfig => {
  console.log(responseConfig);
  return responseConfig;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
