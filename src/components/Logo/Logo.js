import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burgerLogo.png'

const Logo = props => {
  // console.log(props.height);
  return <div 
    className={classes.Logo} 
    // using inline style to overwrite the exisiting styling
    style={{height: props.height}} >
      <img src={burgerLogo} alt='Burger' />
  </div>
};

export default Logo;