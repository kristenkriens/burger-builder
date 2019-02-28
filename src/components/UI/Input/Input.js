import React from 'react';
import classes from './Input.css';

const Input = (props) => {
  const { label, elementConfig, elementType, value, invalid, shouldValidate, touched, changed } = props;

  let inputElement = null;

  const inputClasses = [];
  let validationError = null;
  if(invalid && shouldValidate && touched) {
    inputClasses.push(classes.invalid);

    validationError = <div className={classes.error}>Please enter a valid {elementConfig.placeholder}</div>
  }

  switch(elementType) {
    case ('input'):
      inputElement = <input className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed} />;
      break;
    case ('select'):
      inputElement = (
        <select className={inputClasses.join(' ')} value={value} onChange={changed}>
          {elementConfig.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            )
          })}
        </select>
      );
      break;
    default:
      inputElement = <input className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed} />;
  }

  return (
    <div className={classes.input}>
      <label>{label}</label>
      {inputElement}
      {validationError}
    </div>
  )
}

export default Input;
