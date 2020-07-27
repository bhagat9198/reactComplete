import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => {
      return <BuildControl  
        key={ctrl.label} 
        // as ingredientAdded is a function which takes 'type' as an argumemnt so to correctly update the state.
        // added={props.ingredientAdded}
        added={() => props.ingredientAdded(ctrl.type)} //we are call the function, hence passing the args
        label={ctrl.label} 
      />;
    })}
  </div>
);

export default BuildControls;
