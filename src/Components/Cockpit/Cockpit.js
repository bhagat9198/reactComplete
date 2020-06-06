import React, { useEffect } from 'react';
import classes from './Cockpit.css';

// we restricting the rerender of Persons component when cockpit is getting changed with help of 'shouldComponentUpdate()' which is lifecycle hook.
// now, we dont want cockpit should be rerendered if changes are only made in Persons component.


// rn, React.memo is not helping us and cockpit is rendered everytime when working with persons componenet. that is bec, React.memo depends upon our propes. 
  // and we are passing 'persons' as one of the prop. and person do get change.
const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    setTimeout(() => {
      alert('Data saved to cloud');
    }, 1000);

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

  // our component doesnt depends upon perons but the number of persons. hence the changeing the props which we are passing
  // if(props.persons.length <= 2) {
  //   assignedClasses.push(classes.red); 
  // } 
  // if(props.persons.length <= 1) {
  //   assignedClasses.push(classes.bold);
  // }

  // props.pesons -> props.personsLength
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
        className={btnClass}
        onClick={props.clicked.bind(props.showPersons)}>Toggele Persons
      </button>
    </div>
  );
};

// React.memo :  its a memorization technique where will memorize, basically store the snapshot of this compoenent and only if its inout changes, it will rerender it.
  // else if its input does not change and its parent element wants to update. then react will give back the store snapshot of the componenet.

export default React.memo(Cockpit);