import React from 'react';
import classes from './DrawerToggle.css';

const DrawerToggle = (props) => {
  const { clicked } = props;

  return (
    <div onClick={clicked} className={classes.drawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerToggle;
