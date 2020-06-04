import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {

  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');

  //   setTimeout(() => {
  //     alert('Data saved to cloud');
  //   }, 1000);


  //   // cleanup work in functional components
  //   // in useEffects, we can have nothing(no return statement) or we have return statement whch will have a anomous function.
  //   // return statement: it runs before the main useEffect functions runs, but after the (first) render cycle. 
  //   return () => {
  //     console.log('[Cockpit.js] cleanup work in useEffect ');
  //   };
  //   // here we will not see above console log statement as cockpit componenet is never removed. thus, adding the button is 'App.js'


  // 1st useEffect
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    setTimeout(() => {
      alert('Data saved to cloud');
    }, 1000);

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect ');
    };
  },[]);
  // now we are getting above console log. thus, it gets ouputed when it runs for one last time. 
  // it also depends on 2nd argument
    // when we pass empty array, useEffect() will only execute on first and last time before it is unmounted.

  
  // 2nd useEffect :  without having 2nd arg
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect ');
    };
  });
  // here we can see, return statement is woking everytime whenever user clicks on toggle button or we can say whenever, componenet is rerendered.
    // first return statement is getting executed and then code inside useEffect
  // thus, it can be used whenever we want to do cleanup work before every re-render 

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

  return (
    <div className={classes.Cockpit}>
      <h1>{ props.title }</h1>
      <p className={assignedClasses.join(' ')}>This is really working.</p>
      <button  
        className={btnClass}
        onClick={props.clicked.bind(props.showPersons)}>Toggele Persons
      </button>
    </div>
  );
};

export default Cockpit;