import React from 'react';

// Although, Person.css file has global scope. but till teh time we dont include in our file, functionalities of Person.css will not be implemented 
// import './Person.css';  // Eror, has to give full with respect to current directory.
import './Person.css'

// we are working with JS only. we are not telling to include CSS in our code from abouve statement. its a work webpack which will include css in html while rendering html page to browser. 

const person = (props) => {
  return (
    <div className="Person">
      <p>Hello I am {props.name} and having age of {props.age} </p>
      <p onClick={props.click} >{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;