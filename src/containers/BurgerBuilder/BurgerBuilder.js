import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

// creating global varaiable
const INGREDIENTS_PRICES = {
  // note: igrediants names are same at all places
  salad: 50,
  cheese: 75,
  meat: 95,
  bacon: 80
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 25
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  }; 

  removeIngrediantHandler = (type) => {
    // similar to adding ingredient
    const oldCount = this.state.ingredients[type];
    // before reducing the count by one we should see if that type value is greater than 1. otherwise value will go into negative and while displaying the burger we will get an error.
      // Burger.js:7 Uncaught RangeError: Invalid array length
    // hence checking
    if(oldCount <= 0) {
      // simply return without manupliating the state
      return 
    } 
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  }

  render() {
    // it will be better if we can displable the 'Less' button also when it is not req.
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo) {
      // console.log(key);
      disabledInfo[key] = disabledInfo[key] <= 0
    } 
    // console.log(disabledInfo);
    // {salad: true, cheese: false,...}

    return (
      <Auxilliary>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls 
          ingredientAdded={this.addIngredientHandler}
          // 
          ingredientRemoved={this.removeIngrediantHandler}
          // we are within a function, no need of 'this'
          disabled={disabledInfo}
        />
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;