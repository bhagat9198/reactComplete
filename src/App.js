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

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons : [
          // creating id attribute with random unique values
          {name: 'Max', age:'29'},
          {name: event.target.value , age:'19'},
          {name:'Mark', age:'55'},
        ]
      }
    );
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
        // while displaying the Person component, we are getting this error
        // index.js:1 Warning: Each child in a list should have a unique "key" prop.

        // key prop is imporatnt arg which should be passed while redering list of data and so react tells us do so.
        // as we have not given key property, we are getting the warning. its the default property whixh react try to find out in html or custom componenet which is rendered by te list.
        // this key property, helps react to update the list efficently.
        
        // our app is working fine, but after deleting element when react rereder the DOM, it should know what exactly got changed from privous render.
          // basically, it has virtual DOM which does all this comparison. 
        // thus, it will re-render only the items in the list which are changed. else it will re-render whole list which can become inefficent for long list.
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                click = {() => {this.deletePersonHandler(index)}}
                name = {person.name}
                age = {person.age}
                // passing key property and key value should be something unique like id
                key={person.id}
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


