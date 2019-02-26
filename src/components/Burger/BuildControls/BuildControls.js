import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => {
  const { price, ingredientAdded, ingredientRemoved, disabled, purchasable, purchasing } = props;

  return (
    <div className={classes.buildControls}>
      <p>Current Price: <strong>${price.toFixed(2)}</strong></p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => ingredientAdded(control.type)}
            removed={() => ingredientRemoved(control.type)}
            disabled={disabled[control.type]}
          />
        )
      })}
      <button
        className={classes.orderButton}
        disabled={!purchasable}
        onClick={purchasing}
      >ORDER NOW</button>
    </div>
  )
}

export default BuildControls;
