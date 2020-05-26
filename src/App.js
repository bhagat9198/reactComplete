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
 
  // no need of this
  // switchNameHandler = (newName) => {
  //   this.setState(
  //     {
  //       persons : [
  //         {name: newName, age:'29'},
  //         {name:'Bob', age:'19'},
  //         {name:'Mark', age:'55'},
  //       ]
  //     }
  //   );
  // };

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

  // whenever user clicks on person card, that should be deleted. so creating new handler
  deletePersonHandler = (index) => {
    // getting the person array
    const persons = this.state.persons;
    // splice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
      // 1st arg: telling from where to start deleting
      // 2nd arg: tells how many elements to delete from the index.
    persons.splice(index, 1);
    // updating the state.
    this.setState({persons: persons});
  }

  // our app is working fine, but the implementaion has flaw.
  
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
          {/* in map method, second argument is the index of that element in an array */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                // adding the click param. passing the index, so that it can get to know which element to delete. 
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


