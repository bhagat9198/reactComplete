import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const toogleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toogleButtonRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect ');
    };
  },[]);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect ');
    };
  });

  const assignedClasses = [];
  let btnClass = '';

  if(props.personsLength <= 2) {
    assignedClasses.push(classes.red); 
  } 
  if(props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  if(props.showPersons) {
    btnClass = classes.Red;
  }

  // lets say we want to add authentication. if user is authentcated, Person compoent should display if person is authentacted.
  // but we want to manage authentication in Cockpit (ie butoon click) and state in App.js

  return (
    <div className={classes.Cockpit}>
      <h1>{ props.title }</h1>
      <p className={assignedClasses.join(' ')}>This is really working.</p>
      <button  
        ref={toogleButtonRef}
        className={btnClass}
        onClick={props.clicked.bind(props.showPersons)}>Toggele Persons
      </button>
      {/* adding button for autheication */}
      <button onClick={props.login}>LogIn</button>
    </div>
  );
};

export default React.memo(Cockpit);