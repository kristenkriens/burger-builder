import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
const CheckoutSummary = (props) => {
  const { ingredients, checkoutCancelled, checkoutContinued } = props;

  return (
    <div className={classes.checkoutSummary}>
      <h1>We hope it tastes great!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={ingredients} />
      </div>
      <Button type="danger" clicked={checkoutCancelled}>CANCEL</Button>
      <Button type="success" clicked={checkoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default CheckoutSummary;
