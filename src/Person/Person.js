// as we are creating component, we have to import react
import React from 'react';
import { render } from '@testing-library/react';

// we can create componenet, as we have done in App.js with help of class. but wew can do with help of functions

// as it is component, it can be uppercase. but genearlly functions are in lower case
const person = () => {
  return <p>Hello I am Person</p>;
};

export default person;
