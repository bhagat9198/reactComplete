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





// if we are using class based components which extends 'Components' and using 'shouldComponentUpdate()'.
// and if we have to compare all the props which matter to the component to difference. then there is easier way 

// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Person from './Person/Person';

// class Persons extends Component { //no need

// PureComponent : it is a normal component that already implements 'shouldComponentUpdate()' with a complete(all) props checks. thus only changes when any props change in that component.

class Persons extends PureComponent {


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');

  //   // other than 'persons' props we have 'clicked' and 'changed' props also. and if those props value changes, we should update the component.
  //   // hece, adding more conditions
  //   if(nextProps.persons !== this.props.persons || 
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // // here, to update the component, we are checking all the props value. 
  
  // as we are using PureComponent, then there is no need to use 'shouldComponentUpdate()' as it already implememts beforehand. 
  // app works mormal as before

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
        />
      );
    });
  }
  
} 

export default Persons


