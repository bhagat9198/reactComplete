import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxillary from '../hoc/Auxilliary';
import withClass from '../hoc/withClass';

// importing context
import AuthContext from '../context/auth-context';
// context can be used as component also and thus name is capatilse and it should warp all teh parts of the application that need access to the context.


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons : [
      {id: 'wmj1', name:'Max', age: 29},
      {id: 'vff22', name:'Bob', age: 19},
      {id: '434f', name:'Mark', age: 15},
    ],
    something: 'hello',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    }) 
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  }
  
  render() {
    console.log('[App.js] render');
    
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}   
          // no need to pass this arg in props
          // isAuthenicated = {this.state.authenticated}   
        />
      );
    }

    // in our case, context should be wrapped around Cockpit and Persons comp. we wrappe the component bit differently with context.
    return (
      <Auxillary>
        <button onClick={() => {
          this.setState({
            showCockpit: false
          })
        }}> Remove Cockpit </button>
        {/* thus, now its a provider componenet and it takes a value prop. and thats why default values passed in 'auth-context' file doesnt matter. Defauly value will be applied only when we dont apply any other value */}
        {/* in our case, we want to pass dynamic value as auth status can be changed. thus passing our object */}
        {/* {{}} : object inside dynmaic values */}
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login : this.loginHandler
        }}>
          {/* thus, now Cockpit comp and Persons comp can access the above values as they are warrped inside provider comp. */}
          { this.state.showCockpit ? (
            <Cockpit 
              title = {this.props.appTitle}
              showPersons = {this.state.showPersons}
              clicked = {this.toggelPersonsHandler}
              personsLength = {this.state.persons.length}
              // no need to pass this arg anymore here in props
              // login = {this.loginHandler}
            />
          ) : null  }
          {persons}
        </AuthContext.Provider>
      </Auxillary>
    );
  }
}

export default withClass(App, classes.App);

