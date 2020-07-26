import React from 'react';
import classes from './Burger.css';
import BurgerIngrediant from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  // const transformedIngrediants = Object.keys(props.ingredients).map(igKey => {
  //   return [...Array(props.ingredients[igKey])].map((_, i) => {
  //     return <BurgerIngrediant key={igKey+i} type={igKey} />
  //   });
  // });

  // as now there are no ingredinats, it will be good to show some message to the user to add ingredants.
  // console.log(transformedIngrediants); // [[],[],[],[]];
  // transformedIngrediants is not null even if ingrediants are null. thus checking is length will not do the trick.

  // thus, we can flatten this array by extracting all the values of inner arrays and making one single array
  // this can be done by help of reduce() method : it a bulit in array function which allows us to transform an arrya to something else. it takes function as an input and it recives 2 args (callback and inital value)
    // callback accepts 2 values automtically ie previous value and current value. 
    // reduce method not only accept these callback here which is executed on every element in this array.
    // it also accepts the inital value whcih can be anything. according to project, lets say an empty array
  let transformedIngrediants = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngrediant key={igKey+i} type={igKey} />
    });
  }).reduce((arr, el) => {
    // console.log(arr);
    // console.log(el);
    // so it will loop through all the elements. 
    // we are concatingating the current value to initail element
    return arr.concat(el);
  },
  // giving empty array as the initial value
  []);

  console.log(transformedIngrediants);
  // now we will get a single array having jsx code inside if some ingrediants are added or an empty array. thus, now we can check transformedIngrediants array legth

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