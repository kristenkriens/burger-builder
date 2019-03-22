import React from 'react';
import classes from './Button.css';

const Button = (props) => {
  const { children, clicked, type, disabled } = props;

  return (
    <button onClick={clicked} disabled={disabled} className={[classes.button, classes[type]].join(' ')}>{children}</button>
  )
}

export default Button;
