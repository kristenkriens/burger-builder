import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = (props) => (
  <div className={classes.logo}>
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
)

export default Logo;
