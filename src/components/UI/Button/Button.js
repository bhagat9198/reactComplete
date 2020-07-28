import React from 'react';

import classes from './Button.css';

const Button = props => {
  // will pass props.children so that we use our custom buttons within this button elemenet
  // need an onclick listner
  // and differnt stylings for dinner kinds of buttons
  return (
    <button
      onClick={props.clicked}
      // as we will be passing multiple class names based on btnType. making use of arrays
        // btnType: 'Success' or 'Danger'.
        // converting array to string type. a whitespace between the classes names
      className={[classes.Button, classes[props.btnType]].join(' ')}
      >{props.children}
    </button>)
}

export default Button;