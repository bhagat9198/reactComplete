import React from 'react';

// importing 
import Radium from 'radium';

import './Person.css';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
  }

  return (
    // inline styles overwrite the class styles as they are more specific. its a default css rule not radium rule.
    <div className="Person" style={style} >
      <p onClick={props.click}>Hello I am {props.name} and having age of {props.age} </p>
      <p >{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);