import React from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => (
  <ul className={classes.navItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">
      Checkout
    </NavItem>
  </ul>
)

export default NavItems;
