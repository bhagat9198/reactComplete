import React from 'react';

// importing css class
import classes from './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';

  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red); 
  } 
  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  if(props.showPersons) {
    btnClass = classes.Red;
  }


  // we are changing the style (button and paragraph), we need css file.
  return (
    // we can only return one html tag, thus wrapping all the html tag to single 'div' element.
    <div className={classes.Cockpit}>
      <h1>Hello world of React!!!</h1>
      <p className={assignedClasses.join(' ')}>This is really working.</p>
      <button  
        className={btnClass}
        onClick={props.clicked.bind(props.showPersons)}>Toggele Persons
      </button>
    </div>
  );
};

export default cockpit;