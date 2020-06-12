import React from 'react';
import classes from './Burger.css';
import BurgerIngrediant from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngrediant type='bread-top' />
      <BurgerIngrediant type='salad' />
      <BurgerIngrediant type='meat' />
      <BurgerIngrediant type='cheese' />
      <BurgerIngrediant type='bacon' />
      <BurgerIngrediant type='bread-bottom' />
    </div>
  );
}

export default Burger;