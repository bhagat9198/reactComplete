import React from 'react';

// not creating any seprate 'div' element to hold the content, hence importing 'Aux' hoc
import Auxilliary from '../../../hoc/Auxilliary'

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      // passing the key element to prevent from "Warning: Each child in a list should have a unique "key" prop."
    <li key={igKey}>
      {/* using inline css.. first{} for dymamic and {} is JS object */}
      <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
    </li>
    )
  })
  return (<Auxilliary>
    <h3>Your Orders</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      {ingredientsSummary}
    </ul>
    <p>Continue to checkout?</p>
  </Auxilliary>);
};

export default OrderSummary;

