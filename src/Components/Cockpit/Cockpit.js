import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
  // // as we know, useEffect has functionality of both 'componenetDidMount()' and 'componentDidUpdate()' and so it is running everytime. 
  // // but, we want to do certain task(like http req) only once when component is rendered for the first time.
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
    
  //   // creating a seniour (like http req)
  //   // a function will execyte after 1 sec
  //   setTimeout(() => {
  //     alert('Data saved to cloud');
  //   }, 1000);
  //    cycle.
  // });





  // // right now, this alert is poping up at every rerender. thus, controlling it when it should get executed.
  // // useEffect, accepts 2nd argument of type array after the function. in an array, we simply point to all the varaiables or data that used in useEffect. it should rerun whenever one of the dependencies changes which is given in an array.
  //   // right, we are not using any data. 
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');

  //   setTimeout(() => {
  //     alert('Data saved to cloud');
  //   }, 1000);
  // }, 
  // // we want this alert to popup only when perons change
  // [props.persons]
  // );
  // // thus, one alert will come very first time when this component is rendered for the first time and then only when person data changed like its name or no of persons in an array





  // but now we want alert only when componenent is rendered for the first time
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    setTimeout(() => {
      alert('Data saved to cloud');
    }, 1000);
  }, 
  // passing the empty array : it tell that there are no dependencies and it should rerun whenever one of the depdencies changes. as there are no dependencies mentioned, they can never changes and hence it will never rerun.
  // it will fun very first time, that is default but after that, it will no rerun.
  []);
  // above is perferct eg when we only want use 'componenetDidMount()'






  // we can use more than one useEffects if we have more than one data which we want to control.
  // useEffect(() => {});

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