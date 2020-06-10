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





import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!!!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
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
          // no need to pass this argument anymore
          // isAuth = {this.props.isAuthenicated}
        />
      );
    });
  }
} 

export default Persons


