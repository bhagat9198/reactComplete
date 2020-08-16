import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      // we can configure our BrowserRouter.
      // basename: bydefault it is set to '/'. but if we want to server our app from '/my-app' then we need to tell.
        // now all the path will start from /my-app  
      // <BrowserRouter basename="/my-app">
      
      <BrowserRouter basename="/my-app">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
