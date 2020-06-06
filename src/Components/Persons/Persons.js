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

    // return true;
    // as we are returning true, it means taht whenever something is getting updated or this componenent is getting rerendered, then we update the componenent.
    // Persons.js rerendered when something changes in App.js because Perons.js is child componenet of App.js.
    // thus, if we only update the Cockpit.js, still Persons.js will be re-rendered.


    // now putting the condition
    // nextProps : It will contain the propes values which can be updated while component is rerendered. we can attach any property name which we are passing from App.js. 
      // in our case we are passing : persons, clicked, and changed property
    // this.props.persons : it contains the props values which were availbe before latest re-rendering of component takes place.
    
    if(nextProps.persons !== this.props.persons) {
      // thus, if value of new persons props is changed from the old persons props. only at that time update the component.
      return true;
    } else {
      // if no changes are made, no updating of compoenent.
      return false;
    }

    // Note:
      // now, if we make changes to cockpit component, our Persons componenet will not change. as when poineter will come to 'shouldComponentUpdate()' method, it will return 'false' hence execution of Perons.js will get stop.
      // another way to see it in chrome devolpers tools : three dots -> more tools -> rendering -> check paint flash
        // there, when we remove cockpit, still persons compinented will be painted although it has npt been rendered. that is bec  it is shifted on the top.
        // better example to see of pain flash is typing the name in textbox and only that compninent will be flashed. 
  }

  // thus, we had added bit of optimization to our react app.
  // there are two types of dom.
  // there is difference between virtual dom of react and real dom.
  // although real dom do optimization and only render stufff that is changed but id we do react virual dom optimization, that will make our app fast as execution takes place at real dom.

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


