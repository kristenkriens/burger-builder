import React from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => {
  const { isAuthenticated } = props;

  return (
    <ul className={classes.navItems}>
      <NavItem link="/" exact>
        Burger Builder
      </NavItem>
      {isAuthenticated ? (
        <NavItem link="/orders">
          Orders
        </NavItem>
      ) : null}
      {isAuthenticated ? (
        <NavItem link="/logout">
          Logout
        </NavItem>
      ) : (
        <NavItem link="/auth">
          Authenticate
        </NavItem>
      )}
    </ul>
  )
}

export default NavItems;
