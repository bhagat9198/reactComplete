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
 
  switchNameHandler = (newName) => {
    this.setState(
      {
        persons : [
          {name: newName, age:'29'},
          {name:'Bob', age:'19'},
          {name:'Mark', age:'55'},
        ]
      }
    );
  };

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
  
  // whenever the elements are rendered to DOM, whole rendered method is executed not just return method inside render method. hece, we can write JS within the render method which needed to be executed everytime whenever we want to render elements to DOM.  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    // if, we see our code closing, we are passsing hard coded values. if we add another person then we have to make another div for it.
    // as we are state in which we are storing persons as an array. thus, insraed of hard coding, we just loop over an array

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {/* Displaying dynamically with the help of loop */}
          {this.state.persons.map(person => {
            return (
              <Person
              name= {person.name}
              age = {person.age}
              />
            );
          })}

          {/* hence, no need of this */}
          {/* <Person  
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
          />
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, 'Alex')}> My Hobbies : Soccer, Cricket  
          </Person> */}
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


