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
        {/* only components names should be in upper case, we write 'div' n uppercase, it will give error. as its just a syntatic suagr, not a html  */}
        {/* <DIV>Hey</DIV>  */}
        {/* <Person></Person> */}
        {/* or */}
        <Person />
        {/* we can reuse our component as many times we want. thats y we use components. as they are small pieces of code, so easier to mamange.*/}
        <Person />
        <Person />
        <Person />

      </div>
      // <h2>Hey!!</h2>
    );
  }
}
export default App;

