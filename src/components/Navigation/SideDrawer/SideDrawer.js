import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const SildeDrawer = props => {
  return <div className={classes.SideDrawer}>
    <div className={classes.Logo}>
      <Logo />
    </div> 
    <nav >
      <NavigationItems />
    </nav>
  </div>
};

export default SildeDrawer;