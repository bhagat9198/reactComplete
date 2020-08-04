import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  SideDrawerCloserHandler = () => {
    this.setState({showSideDrawer: false});
  };

  // 
  sideDrawerToggleHandler = () => {
    // it can lead to flaw due to async nature of JS
    // this.setState({showSideDrawer: !this.state.showSideDrawer});

    // getting teh previous state and using it to extarct the values
    this.setState(prevState => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render() {
    return (
      <Auxilliary>
        {/* passing teh reffence to the function but not calling */}
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
          closed={this.SideDrawerCloserHandler}
          open={this.state.showSideDrawer}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxilliary>
    );
  }
} 

export default Layout;
