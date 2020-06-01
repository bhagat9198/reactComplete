import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


// we will start with 'App.js' as it is class based component.
class App extends Component {

  // 1st step, adding constructor
    // it will take 'props' as arguments
  constructor(props) {
    // within it, we have call 'super' constructor also, as it will be calling the construtor of the 'Component' which we have extended into our class by importing it from 'react'.
      // it is done, so that verything is inilized properly and we can do things like accessing state or seting the state.
    super(props);

    console.log('[App.js] constructor');

    // we also can set the state here in constructor. thus, seting the state
    // this.state = {
    //   persons : [
    //     {id: 'wmj1', name:'Max', age:'29'},
    //     {id: 'vff22', name:'Bob', age:'19'},
    //     {id: '434f', name:'Mark', age:'15'},
    //   ],
    //   something: 'hello',
    //   showPersons: false 
    // }
    
  }

  // but inilizing the state outside of constructor is more modern appraoch. here, it will behind the sceans will call the constructor, super(). thus, setting up for us everything automatically.
  state = {
    persons : [
      {id: 'wmj1', name:'Max', age:'29'},
      {id: 'vff22', name:'Bob', age:'19'},
      {id: '434f', name:'Mark', age:'15'},
    ],
    something: 'hello',
    showPersons: false 
  };

  // 2 step:
  // its a static method, so putting 'static' keyword before method. its imp to put so that react can understand correctly. 
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    // and we should return oue updated state
    // but for now, just returning teh old state.
    return state;
  }

  ///////////////////////////////////////////////
  /*

  The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.
  // eg:

  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    static hello() {  // static method
      return "Hello!!";
    }
  }

  mycar = new Car("Ford");

  //Call 'hello()' on the class Car:
  document.getElementById("demo").innerHTML = Car.hello();

  //and NOT on the 'mycar' object:
  //document.getElementById("demo").innerHTML = mycar.hello();
  //this would raise an error.

  // Hence, Static methods are called directly on the class (Car from the example above) - without creating an instance/object (mycar) of the class.

  */
  ///////////////////////////////////////////////

  // earlier, there were other hooks as well. we can use those hooks and are safe to use even though, we will get a warrning in console tab of chrome dev tools. as those tools were used rarely and incorrectly, so these wil be removed in future.

  // one such method is this, will execute just before 'componentDidMount'
  // it is used to prepare the state correctly which can be done in 'getDerivedStateFromProps'
  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  // 4 step
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
  
  // 3 step:
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
