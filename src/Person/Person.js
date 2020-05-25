import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>Hello I am {props.name} and having age of {props.age} </p>
      {/* for better indentation, changing 'span' to 'div' */}
      <p onClick={props.click} >{props.children}</p>
      {/* putting the inputbox, so that user can enter the text */}
      {/* onChanged method will be triggered whenever user enter text in inputbox and hence state is changed. */}
      {/* <input type="text" onChange={props.changed} value={props.name} /> */}

      {/* we also want intially, textbox should contain the value as person name. */}
      {/* This is known as two way binding, we are passing the text box data as well as getting the data */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;