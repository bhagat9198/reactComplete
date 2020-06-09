// we want 'toogle button' should be prssed automatically when the application loads for the first time. ie person cards should be visible.

// importing the react hook for handling ref
import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  // setting up the reference
  // as we are in function, we cant put a constructor. so setting up another function. this function should be before the JSX return
  // const toggleButtonRef = React.createRef // cant use, it only for class
  // using react hook ' useRef'
  // userRef() :  we can pass the initial values bec 
    // 1 : it is not only used for refferences, to access to DOM element
    // 2 : we can even store the values in there. 
  // as we are not setting up any initial value, so passing 'null'
  const toogleButtonRef = useRef(null);
  // now our ref is creted, we will attach it to DOM (JSX)

  // once linking is done, now we can use this ref to do desired task. in our case we want it to get clicked
  // toogleButtonRef.current.click();

  // and we will get an error : "Uncaught TypeError: Cannot read property 'click' of null". this is bec, above function is getting executed before it this function is returning JSX where we are linking this 'toggleButtonRef' to button. thus, connection is not made to DOM, button is undefined, thus 'click' property cant be read when this function eexecutes.

  // solution: putting the above statement in useEffect as useEffect will only run after return statement. 


  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // 
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

  return (
    <div className={classes.Cockpit}>
      <h1>{ props.title }</h1>
      <p className={assignedClasses.join(' ')}>This is really working.</p>
      <button  
        // setting up ref
        ref={toogleButtonRef}
        className={btnClass}
        onClick={props.clicked.bind(props.showPersons)}>Toggele Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);