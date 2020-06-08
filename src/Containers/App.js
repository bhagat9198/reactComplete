import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxillary from '../hoc/Auxilliary';
import withClass from '../hoc/withClass';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons : [
      {id: 'wmj1', name:'Max', age:'29'},
      {id: 'vff22', name:'Bob', age:'19'},
      {id: '434f', name:'Mark', age:'15'},
    ],
    something: 'hello',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    console.log(props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  };

  

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  };
  
  render() {
    console.log('[App.js] render');
    
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}        
        />
      );
    }

    return (
      <Auxillary>
        <button onClick={() => {
          this.setState({
            showCockpit: false
          })
        }}> Remove Cockpit </button>

        { this.state.showCockpit ? (
          <Cockpit 
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            clicked = {this.toggelPersonsHandler}
            personsLength = {this.state.persons.length}
          />
        ) : null  }
        {persons}
      </Auxillary>
    );
  }
}

export default withClass(App, classes.App);

