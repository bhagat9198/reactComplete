// here ww are using function component. so, we cant use 'componentDidMount()'
// we can manage state with help of 'useState()' but cant do work of 'componentDidMount()'. 
// but, we have another hook 'useEffect()' which is the second imporatnt most used hook which can be used next to 'useState()'.
  // why its imp?
    // because, it can cover the functionality of all the lifecycle hooks of classbased.
  // 'useEffect()' is react hook not lifecycle hook.

// importing the useEffect
import React, { useEffect } from 'react';

import classes from './Cockpit.css';

// React component names need to start with a capital letter.
  // That's because React treats components starting with lowercase letters as DOM tags.
// thus, changing 'cockpit' to 'Cockpit'. else we will get an error "React Hook "useEffect" is called in function "cockpit" which is neither a React function component or a custom React Hook function react-hooks/rules-of-hooks"

const Cockpit = (props) => {
  // how to use useEffect?
    // we can add it anywhere in our functional body
  
  // useEffect takes a function(with no arguments) which will run at every render cycle
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // we can see above console log statement every time something is rendered on the screen in chrome dev tools.

    // thus, here we can do all our task what we can do in 'componentDidUpdate()'.
    // like we can send http request

    // it doesnt have functionality of 'getDerivedStateFromProps()' and we actually dont need it also. as it is functional component, we are getting props. and so, we can use useState()
  });

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

// chaging the export varaiable here also.
export default Cockpit;