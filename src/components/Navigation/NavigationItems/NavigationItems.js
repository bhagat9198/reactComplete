import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
  return <ul className={classes.NavigationItems}>
    {/* <li><a href="/"></a></li> */}

    {/* passing active value as bool value */}
    {/* <NavigationItem link="/" active={false} >Burger Builder</NavigationItem> */}
    {/* or */}
    <NavigationItem link="/" active >Burger Builder</NavigationItem>
    {/* for bool values, it nnot nessary to pass 'true' or 'false' value */}
    <NavigationItem link="/" >Checkout</NavigationItem>
  </ul>
}

export default NavigationItems;
