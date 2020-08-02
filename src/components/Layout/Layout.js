// 
import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

// const Layout = (props) => {
//   return (
//     <Auxilliary>
//       <Toolbar />
//       {/*  */}
//       <SideDrawer />
//       <main className={classes.Content}>
//         {props.children}
//       </main>
//     </Auxilliary>
//   );
// };

class Layout extends Component {
  // setting up state for sideDrawer
  state = {
    // for testing, making it true else false
    showSideDrawer: true
  }

  SideDrawerCloserHandler = () => {
    this.setState({showSideDrawer: false});
  };

  render() {
    return (
      <Auxilliary>
        <Toolbar />
        <SideDrawer 
          closed={this.SideDrawerCloserHandler}
          // also passing show property ie weather slideDrawer should be visible or not
          open={this.state.showSideDrawer}
           />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxilliary>
    );
  }
} 

export default Layout;
