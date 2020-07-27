import React from 'react';
import Auxilliary from '../../../hoc/Auxilliary'

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
    <li key={igKey}>
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

