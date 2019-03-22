import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = (props) => {
  const { ingredients } = props;

  let transformedIngredients = Object.keys(ingredients).map((ingredientKey) => {
    return [...Array(ingredients[ingredientKey])].map((_, i) => {
      return <Ingredient key={ingredientKey + i} type={ingredientKey} />;
    });
  }).reduce((prev, curr) => {
    return prev.concat(curr)
  }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.burger}>
      <Ingredient type="breadTop" />
      {transformedIngredients}
      <Ingredient type="breadBottom" />
    </div>
  )
}

export default Burger;
