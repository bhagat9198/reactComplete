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
import Person from './Person/Person';

class App extends Component {
  
  state = {
    person : [
      {name:'Max', age:'29'},
      {name:'Bob', age:'19'},
      {name:'Mark', age:'15'},
    ],
    something: 'hello'
  }

  switchNameHandler = () => {
    // console.log('clicked!!');
    console.log(this.state.something);

    // changing the value
    // this is not the recommened way to change the state value. hence it will not work
    // this.state.person[0].name = 'Alex';

    // 'setState': its a inbuild method provided by Component class. with this method only, we can change the values of 'State'
    this.setState(
      // it takes an object, same as we do in 'state' and pass the keys whose value we want to change.
      {
        // here we are passing only 'person' as we are chaging its value.
        person : [
          {name:'Alex', age:'29'},
          {name:'Bob', age:'19'},
          {name:'Mark', age:'55'},
        ]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world of React!!!</h1>
        <Person  name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}> My Hobbies : Soccer, Cricket </Person>
        <button  onClick={this.switchNameHandler}>Switch Names</button>
      </div>

    );
  }
}
export default App;

