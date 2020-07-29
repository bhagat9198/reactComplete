import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => {
  return <header className={classes.Toolbar}>
    <div>Menu</div>
    <div className={classes.Logo}>
      <Logo /> 
    </div>

    {/* we only want to out this nav only screen size is more than 499px. thus adding media query */}
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>;
}

export default Toolbar;