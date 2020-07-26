import React from 'react';

import classes from './BuildControl.css'

// builControl will have 3 imp things ie label, less and more.

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    {/* correction: button inplace of div */}
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
)

export default BuildControl;
