import React from 'react';
import classes from './Burger.css';
import BurgerIngrediant from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  // getting ingrediants in props but as object. thus converting object to array
  // 1. 
    // keys methods : it extracts the keys of the given object and turns it into an array. thus gives the array of keys ie(salad, bacon, cheese, meat)
  const transformedIngrediants = Object.keys(props.ingredients).map(igKey => {
    // console.log(igKey); // salad, bacon, cheese, meat

    // console.log(props.ingredient);
    // console.log(props.ingredient.igKey);
    // console.log(props.ingredient[igKey]);  // same output as above
    // console.log(Array(props.ingredients[igKey]));
    
    // Array(length): its a method with creats an array of specific legth which is given as an argument. 
    // Eg: Array(2) => [undefined, undefined];
    
    // using map on the formed array 
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      // console.log(i);
      return <BurgerIngrediant key={igKey+i} type={igKey} />
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngrediant type='bread-top' />
      {/* <BurgerIngrediant type='salad' />
      <BurgerIngrediant type='meat' />
      <BurgerIngrediant type='cheese' />
      <BurgerIngrediant type='bacon' /> */}

      {/* passing the array */}
      {transformedIngrediants}
      <BurgerIngrediant type='bread-bottom' />
    </div>
  );
}

export default Burger;