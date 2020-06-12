// showing graphical burger ingrediants

import React from 'react';
import classes from './BurgerIngredient.css';

const BurgerIngredient = (props) => {
  // we will expect some props propties and based on that we will will be outputting burger ingredient.

  let ingredient = null;

  // 'type' will be a property which will contain burger ingrediants.
  switch(props.type) {
    case ('bread-bottom') :
      ingredient = <div className={classes.BreadBottom}></div>
      break;
    case ('bread-top') :
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case ('meat') :
      ingredient = <div className={classes.Meat}></div>
      break;
    case ('cheese') :
      ingredient = <div className={classes.Cheese}></div>
      break;
    case ('salad') :
      ingredient = <div className={classes.Salad}></div>
      break;
    case ('bacon') :
      ingredient = <div className={classes.Bacon}></div>
      break;
    default :
      // if props.type doesnt mateches any of the string above
      ingredient = null;
  }

  return ingredient;
}

export default BurgerIngredient;