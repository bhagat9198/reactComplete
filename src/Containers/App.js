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
    showCockpit: true,
    // adding 
    changeCounter: 0
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

    // till now we are using state correctly.
    // lets see how we can use it incorrectly. 
    // for that, let add a counter which count the key strokes made when name is changed and total keys strokes should be stored.

    // we know, this.setSate will be triggered whenever namechange is done ie with every keystroke name is changed and everytime name will be changed. 
    // updating the counter : it depends upon previous state
    // this.setState({persons: persons, changeCounter: this.state.changeCounter + 1});
    // our logic and app is working fine but its a wrong way of setting up the state.

    // behiend the sceans, setState does not immediately trgger instead its is basically secheduled by react and react will then perform the state update and the re-render cycle when it has available resources to do that.
    // we are calling set state synchronously but doesnt gurantees to execute and finish immediately. thus in above "this.state.changeCounter" cant be latest state everytime.
    // hence, when our new state state depends upon old state. we can use the above technnique.


    // setStae does not only take Js obj. 
    // it also works when we pass a function. it will take 2 args :
      // 1arg: previous state
      // 2arg: current props
    this.setState((prevState, props) => {
      // in fun body, we should return the new JS obj
      return {
        persons: persons,
        // changeCounter: this.state.changeCounter + 1
        changeCounter: prevState.changeCounter + 1
      }
    }) 
    // and here react eill gurantee that new state was updated on last state only

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

