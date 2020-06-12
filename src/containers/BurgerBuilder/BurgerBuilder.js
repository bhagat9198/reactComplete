// BurgerBuilder is our main part of the app and here we will store the state of the application. 

import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary';

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxilliary>
        {/* it hold two main parts for now. 1. graphical Burger 2.Controls of burger such as ingrediants which should be assed to burger */}
        <div>Burger</div>
        <div>Burger controls</div>
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;