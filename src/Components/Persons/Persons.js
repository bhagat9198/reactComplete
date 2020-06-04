// import React from 'react';
// import Person from './Person/Person';

// const persons = (props) => {
//   console.log('[Persons.js] render...');
  
//   return props.persons.map((person, index) => {
//     return (
//       <Person 
//         click = {() => props.clicked(index)}
//         name = {person.name}
//         age = {person.age}
//         key = {person.id}
//         changed = {(event) => {props.changed(event, person.id)}} 
//       />
//     );
//   });
// } 

// export default persons; 


// converting into  class based

import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!!!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }


  // we know this component will get removed when we click on toggle button. so, we want to remove some eventlisteners which are in this componenet when we want to remove while removing this component.
  // here, we dont have anything to clean but in actual website we can have like removing the connections from the server.
  // to, do this we have one lifecycle hook
  componentWillUnmount() {
    // we can write any code which should be removed .
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] render...');
    
    return this.props.persons.map((person, index) => {
      return (
        <Person 
          click = {() => this.props.clicked(index)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          changed = {(event) => {this.props.changed(event, person.id)}} 
        />
      );
    });
  }
  
} 

export default Persons


