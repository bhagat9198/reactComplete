import React from 'react';

const person = () => {
  // along with person we want to display teh age which should be dynamic.
  // to display dynamic content, ie if we want to add JS, this can be done by adding JS with {}
return <p>Hello I am Person and having age {Math.floor(Math.random()*30)}</p>;
};

export default person;
