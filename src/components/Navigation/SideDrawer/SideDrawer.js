import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
// 
import Auxilliary from './../../../hoc/Auxilliary';
import Backdrop from './../../UI/Backdrop/Backdrop';

const SildeDrawer = props => {
  // adding sideDrawer conditionally
  // classes.SideDrawer : our main class
  // initially making SlideDrawer hidden 
  let attachedClasses = [classes.SideDrawer, classes.Close];

  // put if 'props.open' property is true ie SWlidedrawer has to be open, changing the class 'close' to 'open'
  if(props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    // we want Backdrop and SlideDrawer side by side
    <Auxilliary>
      {/* to make backdrop visible, we need to pass the 'show' props. and as bool value, no need to pass the value */}
      {/* <Backdrop show /> */}
      {/* now we dont always want to show backdrop. it should be only visible when SideDrawer is visible. thus, we need have click listen on backdrop which we have already. now, we want to link that listner. we can make this state as statefull component and manage the state.
      but, we area also triggereing slideDrawer from toolbar ie Menu button.
      and we are having connection of Toolbar and sideDrawer in layout section. 
      thus, it will be better to make Layout compoenent as class based because from theer we can control the 'menu' button of toolbar and sideDrawer itself*/}


      <Backdrop 
        // making show property also dynamic which will depend upon the 'menu' button of toolbar
        show={props.open}
        // prop.closed comming from Layout section 
        clicked={props.closed}/>
        {/* thus, now our backdrop is getting dismiss when we are clicking on it. but sideDrawer is not getting dismissed.
        we have 'open' and 'close' css classes in SldeDrawer.css thus adding those classes conditionally to SideDrawer */}

      
      {/* instaed of one class, passing multiple classes based on condition */}
      {/* <div className={classes.SideDrawer}> */}
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