import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import classes from './Layout.css';
// 
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <Auxilliary>
      {/* <div>ToolBar, SideBar, BackDrop</div> */}
      <Toolbar />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxilliary>
  );
};

export default Layout;
