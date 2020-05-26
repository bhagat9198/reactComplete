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
    something: 'hello',
    showPersons: false
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

  toggelPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
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
  
  // whenever the elements are rendered to DOM, whole rendered method is executed not just return method inside render method. hece, we can write JS within the render method which needed to be executed everytime whenever we want to render elements to DOM.  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // its no a good practice to write conditions within JSX, hence followig different approach.
    let persons = null;
    // putting the if condition and passing JSX
    if(this.state.showPersons) {
      persons = (
        <div>
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
        {/* just passing the dynamic value of persons which can be null or have Person component. */}
        {persons}
      </div>
    );
  }
}
export default App;


