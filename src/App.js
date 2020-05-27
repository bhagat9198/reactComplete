import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons : [
      {id: 'wmj1', name:'Max', age:'29'},
      {id: 'vff22', name:'Bob', age:'19'},
      {id: '434f', name:'Mark', age:'15'},
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; 
    person.name = event.target.value;

    const persons = this.state.persons;
    persons[personIndex] = person;
    this.setState({persons: persons});
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  
  // btn should have green bg when persons are hidden and 'red' bg when persons are shown.
  render() {
    const style = {
      // 
      backgroundColor: 'green',
      color: 'white',

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
                name = {person.name}
                age = {person.age}
                key = {person.id}
                changed = {(event) => {this.nameChangedHandler(event, person.id)}} 
              />
            );
          })}
        </div>
      );
      // it will be only executed when persons are shown
      // changing the property of object
      style.backgroundColor = 'red';
    }

    // adding classes dynamically
    // we want "this is really working" should add style dynamically depending upo the number of persons in the list
    // defining two classes in App.css : red and bold

    // inilizing an array which can store the class names
    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');  // classes = ['red', 'bold]
    }

    return (
      <div className="App">
        <h1>Hello world of React!!!</h1>
        {/* everything is JS, thus we can add classes also dynamically by putting {} */}
        {/* now we have add an array which can contain both classes or single class or none of the class. className accepts a string not an array, hence we are converting array into  string with help of 'join()' method */}
        {/* join(' ') : Adds all the elements of an array separated by the specified separator string. here one space is the seprator field */}
        <p className={classes.join(' ')}>This is really working.</p>
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


