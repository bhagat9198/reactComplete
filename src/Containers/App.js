import React, {Component} from 'react';
import classes from './App.css';

// impotying 2 new components
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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
    let persons = null;
    // let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <Persons 
          persons = {this.state.persons}
          // we will just pass the reffernce of the function but will not call it here.
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}        
        />
        

        // <div>
        //   {this.state.persons.map((person, index) => {
        //     return (
        //       <Person 
        //         click = {() => {this.deletePersonHandler(index)}}
        //         name = {person.name}
        //         age = {person.age}
        //         key = {person.id}
        //         changed = {(event) => {this.nameChangedHandler(event, person.id)}} 
        //       />
        //     );
        //   })}
        // </div>
      );

      // not needed here, as functioanilty has been changed.
      // btnClass = classes.Red;
    }

    // as we have shifted our code to Cockpit.js, this is not needed.
    // let assignedClasses = [];
    // if(this.state.persons.length <= 2) {
    //   assignedClasses.push(classes.red); 
    // }
    // if(this.state.persons.length <= 1) {
    //   assignedClasses.push(classes.bold);  
    // }

    return (
      <div className={classes.App}>

        {/* shfiting this code to Cockpit.js. */}
        {/* <h1>Hello world of React!!!</h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p>
        <button  
          className={btnClass}
          onClick={this.toggelPersonsHandler.bind(this)}>Toggele Persons
        </button> */}

        {/* using cockit component */}
        <Cockpit 
          showPersons = {this.state.showPersons}
          clicked = {this.toggelPersonsHandler}
          persons = {this.state.persons}
        />

        {persons}
      </div>
    );
  }
}

export default App;
