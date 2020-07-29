import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => {
  return <header className={classes.Toolbar}>
    <div>Menu</div>
    
    {/* 1.method */}
    {/* passing the height as the prop  and then using inline style in Logo*/}
    {/* <Logo height="80%" /> */}

    {/* 2nd method */}
    {/* using the class name. athough we alraedy have 'Logo' class but its within Logo compoenet and its scoped only to that compoenent and its name will be converted into something unique bec od css modules of webpack */}
    <div className={classes.Logo}>
      <Logo /> 
    </div>

    <nav>
      <NavigationItems />
    </nav>
  </header>;
}

export default Toolbar;