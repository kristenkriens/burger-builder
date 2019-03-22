import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const { ingredients, price, purchaseContinued, purchaseCancelled } = props;

  const ingredientSummary = Object.keys(ingredients).map((ingredientKey) => {
    return (
      <li key={ingredientKey}>
        {<span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>}: {ingredients[ingredientKey]}
      </li>
    )
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: ${price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button type="danger" clicked={purchaseCancelled}>CANCEL</Button>
      <Button type="success" clicked={purchaseContinued}>CONTINUE</Button>
    </Fragment>
  )
}

export default OrderSummary;
