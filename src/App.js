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
      <div className="App">
        <h1>Hello world of React!!!</h1>
        <Person />
        {/* if we want to pass our own data which can we displayed. we will pass those values as agruments to that componenent. */}
        <Person name="Max" age="30"/>
        <Person  name="Bob" age="19"/>
        <Person name="Mark" age="50"/>

        {/* passing extra data(html) other than passing argument */}
        <Person name="alex" age="25"> My Hobbies are : Soccer </Person>
      </div>
    );
  }
}
export default App;

