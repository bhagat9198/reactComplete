import React, {Component} from 'react';

// now when we import 'App.css' it will scope to that file. our css is nothing but group of objects.now while importing,
  // we have to give a name. this importing name can be anything but mostly 'classes' or 'styles' is most commely used.
  // another common practice is name css files as fileName.module.css 
import classes from './App.css';

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
  };

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
  };
  
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
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
    }

    // due to name conflict changing the name.
    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
      // pushing the class in an array
      assignedClasses.push(classes.red); 
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);  
    }

    return (
      // thus, now css class is converted to JS object by help of css loader. hence, accessing the classes dynamically: classes object followed by css-className (classes.cssClassName)
      // what exactly happening, css loader transforms the css class name which are there in css file into unique ones using localIdentName pattern which we set up in webpack.config.js. it takes class name we defined, js file where we import the class and some random hash to generate uinque css class name. and these are stored in this 'classes' object which we imported.
      <div className={classes.App}>
        <h1>Hello world of React!!!</h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p>
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


