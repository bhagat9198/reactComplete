import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons : [
      {name:'Max', age:'29'},
      {name:'Bob', age:'19'},
      {name:'Mark', age:'15'},
    ],
    something: 'hello',
    showPersons: false
  }

  toggelPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons : [
          {name: 'Max', age:'29'},
          {name: event.target.value , age:'19'},
          {name:'Mark', age:'55'},
        ]
      }
    );
  };

  deletePersonHandler = (index) => {
    // we know that objects and array are refference type. thus when we change the data by calling the array or object, we are changing(mutating) the original array/object. 
    // hence, this is not a good practice and before changing(mutating) the original array daya, we should make a copy of it.
    // const persons = this.state.persons;

    // slice: Returns a section of an array. if no args are passed, it will return whole array
    // const persons = this.state.persons.slice();
    // or
    // using destructing the array(using spread operator)
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click = {() => {this.deletePersonHandler(index)}}
                name= {person.name}
                age = {person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello world of React!!!</h1>
        <button  
          style={style}
          onClick={this.toggelPersonsHandler.bind(this)}>Toggele Persons
        </button>
        {persons}
      </div>
    );
  }
}
export default App;


