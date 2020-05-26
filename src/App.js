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

  // we can crete a 'method' like too as we are within the class. but it can lead to problems when this event is fired in DOM.
  // toggelPersonsHandler() {  }

  // but, we will use arrow function so that we know 'this' keyword always refferes to class
  // as we are within the class, no need to write 'const' or 'let'
  toggelPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // getting the 'boolena' value of 'showPersons'. now changing the boolean value and setting the state.
    this.setState({
      showPersons: !doesShow
    });
    // thus, only showPerson state only changed, rest all state will be same as it is. 
  };

  // in inspect section also we can see, on pressing the button 'div' element which is holding Person compontent values will goes off and comes back. hence, elemnts are really rendered.  
  
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
  

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello world of React!!!</h1>
        <button  
          style={style}
          // onClick={this.switchNameHandler.bind(this, 'Dark')}>Switch Names

          // change of functionality,
          // now we want persons to get hide and show vise versa(toggle) when button is clicked
          onClick={this.toggelPersonsHandler.bind(this)}>Toggele Persons

        </button>
        {/* wrapping all the persons within one div */}
        {/* we know that react works on pure JS, thus to put a condition(or any logic) in JSX, we can wrap our JSX within {} */}

        {
          // after warpping it {}, it became out JSS code. and hance put condition
          // if(this.state.showPersons) //Error: we cant put block conditions within JSX
          // hence, putting ternary operator

          this.state.showPersons ?
            // if condition is true. its JS, not html. atlast it will be converted into React.CreateElement()..... hence, it make perfect sense 
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
            :
            // if condition is false
            null
        }
        {/* this is doing our work which we wanted, but this JSX can be confusing once it become large. */}
      </div>
    );
  }
}
export default App;


