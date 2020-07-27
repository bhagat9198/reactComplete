import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    purchaseable: false,
    // it will become true when 'order now' button will be clicked
    purchasing: false
  }

  updatePurchseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

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
    this.updatePurchseState(updatedIngredients);
  }

  // "BurgerBuilder.js:83 Uncaught TypeError: Cannot read property 'setState' of undefined"
  // we have set the state "this.setState({purchasing: true});" exactly the way it is done in other methods. the reason it fails here because of the way this method is craeted.
  // this syntax will not work correctly while using 'this' keyword if method is triggred through an event. due to the way 'this' keyword works in js, it will then not reffer to class
    // but this not the case for  "removeIngrediantHandler" and "addIngrediantHandler" as those methods are properties assigned with arrow function. 
  // purchasHandler() {
  //   console.log(this);  // undefined
  //   // this.setState({purchasing: true});
  // }

  // thus, setting up above method by making it as property and assigning the arraoe function.
  purchasHandler = () => {
    // console.log(this); 
    // BurgerBuilder {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
    this.setState({purchasing: true});
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
        {/* we dont want to show model everytime. it should be displayed only 'order now' utton is clicked. either we can put if condition to hide or show this model. but we will do it will css */}
        {/* passing teh props */}
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngrediantHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          orders={this.purchasHandler}
        />
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;