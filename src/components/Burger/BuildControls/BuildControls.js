import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

// in order to pass the labels to BuildControls, we should first create all the labels.
// best way is to put all the labels in array so that we can loop over them when required.

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]; 

const BuildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => {
      return <BuildControl key={ctrl.label} label={ctrl.label} />
    })}
  </div>
);


export default BuildControls;