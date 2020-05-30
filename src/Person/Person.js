import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person} >
      <p onClick={props.click}>Hello I am {props.name} and having age of {props.age} </p>
      <p >{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;