import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';
import Backdrop from './../../UI/Backdrop/Backdrop';

const SildeDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxilliary>
      <Backdrop 
        show={props.open}
        clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div> 
        <nav >
          <NavigationItems />
        </nav>
      </div>
    </Auxilliary>
  );
};

export default SildeDrawer;