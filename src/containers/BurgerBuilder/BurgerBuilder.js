import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return (
      <Auxilliary>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger controls</div>
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;