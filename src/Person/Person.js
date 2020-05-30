import React from 'react';
import classes from './Person.css';

const person = (props) => {
  // sumilating the error manually.
  const rand = Math.random();
  // if the random number is greater than '.7', new error will be generated. 
  if(rand > .7) {
    throw new Error('Random number is greater than .7');
  }

  return (
    <div className={classes.Person} >
      <p onClick={props.click}>Hello I am {props.name} and having age of {props.age} </p>
      <p >{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;