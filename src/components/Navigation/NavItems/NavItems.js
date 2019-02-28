import React from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => (
  <ul className={classes.navItems}>
    <NavItem link="/" exact>
      Burger Builder
    </NavItem>
    <NavItem link="/orders">
      Orders
    </NavItem>
  </ul>
)

export default NavItems;
