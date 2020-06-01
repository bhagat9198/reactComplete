//  we will follow the patter, class based componenets will manage state and functional components will be stateless

// here we will pass the persons array.

import React from 'react';
import Person from './Person/Person';

// here, we are passing just one statememnt which will be returned automatically as we ae using es6 arrow function, no need of curly braces and return keyword.

// functional componenets will accept 'props' only as arguemnts which will contain all the data from where this component will be called.
const persons = (props) => props.persons.map((person, index) => {
  
  return (
    // as we are calling 'Person' component, we need to import it.
    <Person 
      // as we are in functional component, we cant use 'this' and dont have these particular functions here.
      // click = {() => {this.deletePersonHandler(index)}}
      // hence, giving name to property.
      click = {() => props.clicked(index)}
      name = {person.name}
      age = {person.age}
      key = {person.id}
      // same goes to this method
      // changed = {(event) => {this.nameChangedHandler(event, person.id)}}
      changed = {(event) => {props.changed(event, person.id)}} 
    />
  );
});

export default persons; 