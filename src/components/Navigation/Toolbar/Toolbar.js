import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
  const { drawerToggleClicked, isAuthenticated } = props;

  return (
    <header className={classes.toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav className={classes.desktopOnly}>
        <NavItems isAuthenticated={isAuthenticated} />
      </nav>
    </header>
  )
}

export default Toolbar;
