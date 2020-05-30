import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';

// importing ErrorBoundary
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              // using ErrorBoundary : error boundary is higher order componenet ie it is wrapping another component within itself. thus it is wrapped around a component which might through the error 
              <ErrorBoundary key = {person.id}>
                {/* moving the key at the top, because this(errorBoundary) is the outermost element which we map and key has be always on the outer most element as thats the element which we replicate(to repeat same element) */}
                <Person 
                  click = {() => {this.deletePersonHandler(index)}}
                  name = {person.name}
                  age = {person.age}
                  // key = {person.id} //not needed here
                  changed = {(event) => {this.nameChangedHandler(event, person.id)}} 
                />
              </ErrorBoundary>
              // whenever we get error, the error message JSX will be rendered but only in production mode.in develelopment we will see error message.
              // thus, we not not cluster every component with ErrorBoundary, as then it also means that as developer you are rectifying errors. only use where u think, error can popup.
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); 
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);  
    }

    return (
      <div className={classes.App}>
        <h1>Hello world of React!!!</h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p>
        <button  
          className={btnClass}
          onClick={this.toggelPersonsHandler.bind(this)}>Toggele Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
