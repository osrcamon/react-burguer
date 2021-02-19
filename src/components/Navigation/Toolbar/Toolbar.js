import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

import classes from './Toolbar.css';

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;