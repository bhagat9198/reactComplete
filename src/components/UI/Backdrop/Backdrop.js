import React from 'react';
import classes from './Backdrop.css'

const Backdrop = props => {
  return (
    // we can pass null as componenet.
    // props.show ? <div className={classes.Backdrop}></div> : null
    
    // once user clicks on backdrop, the Model and backdrop should do go off thus adding onClick event listner
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null

  );
}

export default Backdrop;
// now where to place this backdrop?
  // 1. layout
  // 2. Navbar
  // 3. Modal
  // etc