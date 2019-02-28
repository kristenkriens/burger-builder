import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.css';

const NavItem = (props) => {
  const { children, link, exact } = props;

  return (
    <li className={classes.navItem}>
      <NavLink to={link} exact={exact} activeClassName={classes.active}>
        {children}
      </NavLink>
    </li>
  )
}

export default NavItem;
