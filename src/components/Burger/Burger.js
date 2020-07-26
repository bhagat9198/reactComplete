import React from 'react';
import classes from './Burger.css';
import BurgerIngrediant from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngrediants = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngrediant key={igKey+i} type={igKey} />
    });
  }).reduce((arr, el) => {
    return arr.concat(el);
  },
  []);

  // console.log(transformedIngrediants);

  if(transformedIngrediants.length === 0) {
    transformedIngrediants = <p> Please start adding ingredants!</p>
  } 

  return (
    <div className={classes.Burger}>
      <BurgerIngrediant type='bread-top' />
      {transformedIngrediants}
      <BurgerIngrediant type='bread-bottom' />
    </div>
  );
}

export default Burger;  