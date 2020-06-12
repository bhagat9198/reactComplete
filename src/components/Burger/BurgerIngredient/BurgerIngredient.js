// we can use PropTypes in functional comp also the way we do in class based comp.
// changung functional comp into class based

import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch(this.props.type) {
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
        ingredient = null;
    }

    return ingredient;
  };
}

// adding propTypes
BurgerIngredient.propTypes = {
  // thus, type property must be of 'string' data type and is required.
  // so, we try to use this component (BurgerIngrediant) withour passing 'type' property, will get an error
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;





// import React from 'react';
// import classes from './BurgerIngredient.css';

// const BurgerIngredient = (props) => {
//   let ingredient = null;

//   switch(props.type) {
//     case ('bread-bottom') :
//       ingredient = <div className={classes.BreadBottom}></div>
//       break;
//     case ('bread-top') :
//       ingredient = (
//         <div className={classes.BreadTop}>
//           <div className={classes.Seeds1}></div>
//           <div className={classes.Seeds2}></div>
//         </div>
//       );
//       break;
//     case ('meat') :
//       ingredient = <div className={classes.Meat}></div>
//       break;
//     case ('cheese') :
//       ingredient = <div className={classes.Cheese}></div>
//       break;
//     case ('salad') :
//       ingredient = <div className={classes.Salad}></div>
//       break;
//     case ('bacon') :
//       ingredient = <div className={classes.Bacon}></div>
//       break;
//     default :
//       ingredient = null;
//   }

//   return ingredient;
// }

// export default BurgerIngredient;