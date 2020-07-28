import React from 'react';
import Auxilliary from '../../../hoc/Auxilliary';
// 
import Button from '../../UI/Button/Button';

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
    <p><strong>Your total price: {props.price.toFixed(2)}</strong></p>
    <p>Continue to checkout?</p>
    <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
    <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
  </Auxilliary>);
};

export default OrderSummary;

