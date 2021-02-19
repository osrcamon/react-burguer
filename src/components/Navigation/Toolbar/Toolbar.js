import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

import classes from './Toolbar.css';

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClick} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;