import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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
    showPersons: false 
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    console.log(props);
    return state;
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    // this method has to return something (true or flase)

    // here, we are telling not to update component. which means that after prssing toggle button, our state will not be updated and hence no able to see the persons cards.
    // return false;

    return true;
  }
  // if, we dont include the above hook, bydefault 'shouldComponentUpdate' will be included with 'return true'


  // as we are changing the state when user enter something in textbox, so adding one more lifecycle hook
  componentDidUpdate() {
    // here, i am not accepting any state, prope or snapshot. although we can do.
    console.log('[App.js] componentDidUpdate');
  }
  // or
  // componentDidUpdate(pervProps, prevState, snapshot) {
  //   console.log('[App.js] componentDidUpdate');
  //   // here we will get 'undefined' as there is no method 'getSnapshotBeforeUpdate' in this component. thus, its not getting any values.
  //   console.log(snapshot);
  // }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

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
      <div className={classes.App}>
        <Cockpit 
          title = {this.props.appTitle}
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