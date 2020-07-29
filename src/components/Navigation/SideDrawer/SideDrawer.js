import React from 'react';

// reusing the componenets
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const SildeDrawer = props => {
  return <div className={classes.SideDrawer}>
    {/* 1. method */}
    {/* <Logo height="11%" /> */}

    {/* 2. method */}
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </div>
};

export default SildeDrawer;

// now where to place this SlideDrawer componenet?
