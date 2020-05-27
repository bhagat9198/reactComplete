import React, {Component} from 'react';

// to use radium, first we need to import it
// Radium is defualt export, and then we imported 'styleRoot' named export  
import Radium, { StyleRoot } from 'radium';

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
  
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // now within the style we can add the sudo selector. but it should be wrapped in singke quotes ie like a string. this is because ':' is not a valid JS code. and its properties will be wrapped within object.
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      style.backgroundColor = 'red';
      // adding over property
      // we know we can extract the object values in array notation also.
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red'); 
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');  
    }

    return (
      // as we are using media query in form of inline css, we need to wrap or application by special component provided by radium.
      // wrapping our whole component which is rendered within <StyleRoot>
      < StyleRoot>
        <div className="App">
          <h1>Hello world of React!!!</h1>
          <p className={classes.join(' ')}>This is really working.</p>
          <button  
            style={style}
            onClick={this.toggelPersonsHandler.bind(this)}>Toggele Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

// Wraping the App in radium function. this is known as higher order componenet. 
// higher order componenet :  a componenet which is wrapping one more component within it. thus. adding extra functionalities to our component.
// it can be used on both class and funtional componenets.

export default Radium(App);


