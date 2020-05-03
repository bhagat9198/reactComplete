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

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hello React App</h1>
    //   </div>
    // );

    // writing abouve code in js form

    // createElement() : takes infinite num of agruments(main 3)
      // 1. html element(div, p, section)
      // 2. configration like adding css class
      // 3. subchild of html element 

    // in this 'h1' element as taken as text not as text
    // setting no configration
    // return React.createElement('div', null, 'h1', 'Hello World');

    // to make 'h1' as an element, we have to create another element within parent element
    // configation can be set as object. as 'class' is keyword in js. thus css classes are reffered as 'className'
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world of React!!!'));
  }
}
export default App;

