import React, { Fragment } from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  const { closed, open, isAuthenticated } = props;

  let attachedClasses = [classes.sideDrawer, classes.close];
  if(open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }

  return (
    <Fragment>
      <Backdrop close={closed} show={open} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavItems isAuthenticated={isAuthenticated} />
        </nav>
      </div>
    </Fragment>
  )
}

export default SideDrawer;
