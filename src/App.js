// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <p>Hello React</p>
//     </div>
//   );
// }

// export default App;


// or

import React, {Component} from 'react';
import './App.css';

// inherting 'Compenent' class from react library
class App extends Component {
  // method
  render() {
    // it primary purpose is to render html to dom + otehr stuff according to logic
    // this file can also be named as "App.jsx" instaed of "App.js". this is because of 'html' like code written below
    return (
      // this is not html code, its latter gets compiled into js code
      <div className="App">
        <h1>Hello React App</h1>
      </div>
    );
  }
}

// 'default' : it means if we are importing this file then export 'App' class  
export default App;
