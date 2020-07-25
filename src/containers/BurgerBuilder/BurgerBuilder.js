import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // inilizing the state
  // 1
  // constructor(props) {
  //   super(props);
  //   // as we are in the constructor, we need to use 'this' keyword to inilise the varaiable and here varaiable is our state.
  //   this.state = {...}
  // }

  // 2
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 1
    }
  }

  render() {
    return (
      <Auxilliary>
        {/* passing ingrediants */}
        <Burger ingredients={this.state.ingredients} />
        <div>Burger controls</div>
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;