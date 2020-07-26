import React from 'react';

import classes from './BuildControl.css'

// builControl will have 3 imp things ie label, less and more.

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <div className={classes.Less}>Less</div>
    <div className={classes.More}>More</div>
  </div>
)

export default BuildControl;
