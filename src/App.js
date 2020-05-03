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
  // properties in class is eaqual to defining varaibles.

  // as we are using the class, w can define variables directly
  // var myVar = 'hello'; //error
  myVaraiable = 'Something';
  myNumber = 10;
  // thus no need of using 'var', 'const', 'let'.

  // as we are extending Component class, it gives us one special keyword 'state' 
  // params : use to set and pass from outside
  // state : it is managed from inside the componenet
    // in new version of react, we can manage from inside the functional component
    // we should not use 'state' as  much as possible as it makes our app unpredicataiable and we will not able to handle it properly.
  // state is pecial property : which means that if value inside state is changed, it will make react to rerender DOM automatically
  
  state = {
    person : [
      {name:'Max', age:'29'},
      {name:'Bob', age:'19'},
      {name:'Mark', age:'15'},
    ]
  }

  // "switchName" is the fuction name + "handler": its specify that this method is not activaly called by user, but its an event handler 
  switchNameHandler = () => {
    console.log('clicked!!');
  }

  // its method provided by react
  render() {
    return (
      <div className="App">
        <h1>Hello world of React!!!</h1>
        {/* passing dynamic value */}
        {/* here, 'this' refferes to present class ie 'App' class */}
        <Person  name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}> My Hobbies : Soccer, Cricket </Person>

        {/* adding event handler : if user clicks on button, method should execute
        in react we use "onClick" instaed of "onclick" which is normal way in JS
        */}
        <button  onClick={this.switchNameHandler}>Switch Names</button>
      </div>

    );
  }
}
export default App;

