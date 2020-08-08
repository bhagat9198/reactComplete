import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
// we can enable routing in App.js or index.js file so that we can wrap our application which should be able to render routes and read the routes.
// to do that we need to import component
import { BrowserRouter } from 'react-router-dom';
// BrowserRouter is named export from 'react-router-dom'


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
      // now BrowserRouter is router of this application and now we can do routing feature from anywhere inside this wrapping component ie Blog
    );
  }
}

export default App;
