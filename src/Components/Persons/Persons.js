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

  // 1 step
  // as, we have not inilized any state here. so we are getting the warning. "Persons` uses `getDerivedStateFromProps` but its initial state is undefined". it is used with state.
  // to get rid of warning, commenting out.
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }


  // we had one more hook, which was used earlier but now it is no more used. hence no recommanded. it comes before 'shouldComponentUpdate'.
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps');
  //   console.log(props);
  // }



  // 2 step
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');

    // now, depending upon the logic, it should return true or flase. Doing nothing is not a option. 
    // return true: if reat should continue updating 
    // return false: to stop the app from updating 

    // or now, we will just return true.
    return true;
  }

  // 3 step
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    
    // here we have to return some value. snapshot is nothing but a data package which will be recieved by 'componentDidUpdate'. 
      // so that we can save some information, like scroll postion of user and than that srcolling postion can be used in 'componentDidUpdate' after updating is done like taking back user till where he has scrolled. 
    // if no value is returned, we will a warrning " A snapshot value (or null) must be returned.You have returned undefined."

    // for now, just returning null
    // return null;

    // or we can send some message also
    return {message: 'Snapshot!!!'};
  }


  // another one more hook which is no more used, hence not reccommanded to use is. it comes before 'componentDidUpdate'.
  // componentWillUpdate() {
  //   console.log('[Persons.js] componentWillUpdate');
  // }


  // // 5 step
  // componentDidUpdate() {
  //   console.log('[Persons.js] componentDidUpdate');
  // }
  // or
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    // data package which was sent by 'getSnapshotBeforeUpdate', is stored in 'snapshot' value.
    console.log(snapshot);
    
  }

  // 4 step
  render() {
    console.log('[Persons.js] render...');
    
    return this.props.persons.map((person, index) => {
      return (
        // runs the lifecycle of 'Person' component if there is any.
        <Person 
          click = {() => this.props.clicked(index)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          changed = {(event) => {this.props.changed(event, person.id)}} 
        />
        // once finished with Person component, reder method will be finished.
      );
    });
  }
  
} 

export default Persons


