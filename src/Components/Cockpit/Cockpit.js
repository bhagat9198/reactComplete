import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

// 
import AuthContext from '../../context/auth-context';

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

  return (
    // as we have 'login' button which changes the authentication state. so, we will need a context. hence, importing context and using consumer component.
    <AuthContext.Consumer>
      { (context) => <div className={classes.Cockpit}>
        <h1>{ props.title }</h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p>
        <button  
          ref={toogleButtonRef}
          className={btnClass}
          onClick={props.clicked.bind(props.showPersons)}>Toggele Persons
        </button>
        {/* using context attribute. */}
        <button onClick={context.login}>LogIn</button>
      </div>}
    </AuthContext.Consumer>
  );
};

export default React.memo(Cockpit);