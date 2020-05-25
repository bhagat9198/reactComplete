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
    return (
      <div className="App">
        <h1>Hello world of React!!!</h1>
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
        <button  onClick={this.switchNameHandler.bind(this, 'Dark')}>Switch Names</button>
      </div>

    );
  }
}
export default App;


