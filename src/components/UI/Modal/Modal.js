import React from 'react';
import classes from './Modal.css';

const Modal = (props) => {
  // console.log(props.show);
  // we have transition property, making us of that.
  return <div 
    // using inline style
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1': '0'
    }}
    className={classes.Modal}>
    {props.children}
  </div>
}

export default Modal;