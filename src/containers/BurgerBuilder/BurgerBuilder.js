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

  purchasHandler = () => {
    this.setState({purchasing: true});
  }

  purchasCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchasContinueHandler = () => {
    alert('Continue Purchase!!!');
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
        <Modal 
          show={this.state.purchasing}
          modalClosed={this.purchasCancelHandler}
        >
          <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchasCancelHandler}
            purchaseContinued={this.purchasContinueHandler}
            price={this.state.totalPrice} />
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