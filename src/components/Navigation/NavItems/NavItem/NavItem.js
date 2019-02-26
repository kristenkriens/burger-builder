import React from 'react';
import classes from './NavItem.css';

const NavItem = (props) => {
  const { children, link, active } = props;

  return (
    <li className={classes.navItem}>
      <a
        href={link}
        className={active ? classes.active : null}
      >{children}</a>
    </li>
  )
}

export default NavItem;
