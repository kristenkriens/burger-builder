import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => {
  const { label, added, removed, disabled } = props

  return (
    <div className={classes.buildControl}>
      <div className={classes.label}>{label}</div>
      <button className={classes.less} onClick={removed} disabled={disabled}>Less</button>
      <button className={classes.more} onClick={added}>More</button>
    </div>
  )
}

export default BuildControl;
