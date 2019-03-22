import React from 'react';
import classes from './Order.css';

const Order = (props) => {
  const { ingredients, totalPrice } = props;

  const ingredientsArray = [];
  for(let ingredientName in ingredients) {
    ingredientsArray.push({
      name: ingredientName,
      amount: ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredientsArray.map((ingredient) => {
    return <span key={ingredient.name} className={classes.ingredient}>
      {ingredient.name} ({ingredient.amount})
    </span>
  });

  return (
    <div className={classes.order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>${Number.parseFloat(totalPrice).toFixed(2)} CAD</strong></p>
    </div>
  )
}

export default Order;
