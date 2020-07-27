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

  // as everything is connected, now we want to change the number of ingrediants in state as per the user wish.
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    // we cant mutate the state directly
    const updatedIngredients = {
      ...this.state.ingredients
    };
    // updating the particular ingredient count
    updatedIngredients[type] = updatedCount;
    // updating the price along with ingreduants count
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    // updating teh state
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  }; 

  removeIngrediantHandler = (type) => {

  }

  render() {
    return (
      <Auxilliary>
        <Burger ingredients={this.state.ingredients} />
        {/* passing the refference of addIngredientHandler*/}
        <BurgerControls 
          ingredientAdded={this.addIngredientHandler}
        />
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;