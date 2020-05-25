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
 
  switchNameHandler = (newName) => {
    this.setState(
      {
        person : [
          {name: newName, age:'29'},
          {name:'Bob', age:'19'},
          {name:'Mark', age:'55'},
        ]
      }
    );
  };
  
  nameChangedHandler = (event) => {
    this.setState(
      {
        person : [
          {name: 'Max', age:'29'},
          {name: event.target.value , age:'19'},
          {name:'Mark', age:'55'},
        ]
      }
    );
  };
  

  render() {
    // Inline style is nothing but styling in JS way.
    // thus creating an objecta and passing the values in key-value pair
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // thus, inline css is helpful when we want to style a specific element only. as if we apply style in 'css' file, it will have gloval scope.
    // inline has some limitation too, like we cant style button for hover effect. 

    return (
      <div className="App">
        <h1>Hello world of React!!!</h1>
        <button  
          // passing style property. here 'Style' is keyword which means it holds only css properties
          // style1={style} //error: although passing css properties but will not get applied
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Dark')}>Switch Names
        </button>
        <Person  
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          changed={this.nameChangedHandler}
        />
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}
          click={this.switchNameHandler.bind(this, 'Alex')}> My Hobbies : Soccer, Cricket  
        </Person>
        
      </div>

    );
  }
}
export default App;


