// import React from 'react';
// import classes from './Person.css';

// const person = (props) => {
//   console.log('[Person.js] render...');
  
//   return (
//     <div className={classes.Person} >
//       <p onClick={props.click}>Hello I am {props.name} and having age of {props.age} </p>
//       <p >{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

// export default person;

// converting it into class

import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {

  render() {
  console.log('[Person.js] render...');
  
  return (
    <div className={classes.Person} >
      <p onClick={this.props.click}>Hello I am {this.props.name} and having age of {this.props.age} </p>
      <p >{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name} />
    </div>
  );
  }
};

export default Person;
    
