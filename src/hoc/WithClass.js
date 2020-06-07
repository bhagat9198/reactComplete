// we will use JSX, hence importing react
import React from 'react';

// there is no body of the function hence we are not putting '{}'. 
// as we are directly returning JSX, hence putting '()'
const WithClass = props => (
  // 'props.classes' : 'classes' is just a property which we will receive while using this component.
  // in our case in 'App.js' we have passed the property 'classes
    // classes={classes.App}
  <div className={props.classes}> 
    {props.children}
  </div>
)

export default WithClass;