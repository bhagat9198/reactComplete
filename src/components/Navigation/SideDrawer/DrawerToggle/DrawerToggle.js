import React from 'react';
// 
import classes from './DrawerToggle.css';

const DrawerToggle = props => {
  return ( 
    <div
      // adding the class
      className={classes.DrawerToggle} 
      onClick={props.clicked} >
      <div></div>
      <div></div>
      <div> </div>
    </div>
  );
};

export default DrawerToggle;