// using context outside of JSX, just as we did in class component so that we can add some logic based on context.
// we cant use static mehthod inside a function, thus we will use react hook.

// importing 'useContext'
import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toogleButtonRef = useRef(null);

  // using 'useContext'
  // useContext: will take a value that will be context object which we have imported and its reference will be stroed some varaiable so that we can use the context properties.
  const authContext = useContext(AuthContext);
  // thus a connection will made with 'AuthContext' with this component.

  // accesing the properties of context
  console.log(authContext.authenticated);
  

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
    <div className={classes.Cockpit}>
      <h1>{ props.title }</h1>
      <p className={assignedClasses.join(' ')}>This is really working.</p>
      <button  
        ref={toogleButtonRef}
        className={btnClass}
        onClick={props.clicked.bind(props.showPersons)}>Toggele Persons
      </button>
      {/* <AuthContext.Consumer>
        {context => <button onClick={context.login}>LogIn</button>}
      </AuthContext.Consumer> */}

      <button onClick={authContext.login}>LogIn</button>
    </div>
  );
};

export default React.memo(Cockpit);