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

// import the Person componenent
// no need to mention '.js' extension. 
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      // should be wrapped around only one component
      // should use 'className' instead of 'class'
      // <div class="App">
      <div className="App">
        <h1>Hello world of React!!!</h1>
        {/* <Person></Person> */}
        {/* or */}
        <Person />
      </div>
      // <h2>Hey!!</h2>
    );
  }
}
export default App;

