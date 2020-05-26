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
    // 'find()' method will give the all detail of a person 
    // const person = this.state.persons.find(p => {
    //   return p;
    // });

    // but we will find the index, by using findIndex() method
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // as we persons in an array, we will make a copy before changing its data
    const person = {
      // destructing the object
      ...this.state.persons[personIndex]
    }; 
    // or (2nd method)
    // Object.assign() : it creats an new object
      // 1st arg: target object ir destination
      // 2nd arg: source  object which should be copied to target object
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    // extracting all the persons
    const persons = this.state.persons;
    persons[personIndex] = person;

    // changing the state of 'state'
    this.setState({persons: persons});

  };

  deletePersonHandler = (index) => {
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
                name = {person.name}
                age = {person.age}
                key = {person.id}
                // 'event' param we will get from Person component.
                changed = {(event) => {this.nameChangedHandler(event, person.id)}} 
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


