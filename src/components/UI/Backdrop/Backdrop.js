import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => {
  const { show, close } = props;

  return (
    show ? <div className={classes.backdrop} onClick={close}></div> : null
  )
}

export default Backdrop;
