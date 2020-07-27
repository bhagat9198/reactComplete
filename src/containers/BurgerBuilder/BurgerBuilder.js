import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 15,
  cheese: 20,
  meat: 30,
  bacon: 25
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 20,
    // setting purchase option to false initially as we want user to add atleast one ingredient
    purchaseable: false
  }

  // this function will called everytime whenever the ingredient is added or removed to set purchanseable to true or false. 
  // and we accepting the updatedIngredient arg from both the function 
  updatePurchseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    // updating the state
    this.setState({
      purchaseable: sum > 0
    });

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

    // calling 
    this.updatePurchseState(updatedIngredients);
  }; 

  removeIngrediantHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
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
    
    // calling 
    this.updatePurchseState(updatedIngredients);
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    } 

    return (
      <Auxilliary>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngrediantHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          // 
          purchaseable={this.state.purchaseable}
        />
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;