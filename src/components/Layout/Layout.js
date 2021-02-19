import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => { 
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar 
          drawerToggleClick={this.sideDrawerToggleHandler}
        />
        <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} 
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

export default Layout;