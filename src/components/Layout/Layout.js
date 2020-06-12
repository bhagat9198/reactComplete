import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import classes from './Layout.css';

const Layout = (props) => {
  return (
    <Auxilliary>
      <div>ToolBar, SideBar, BackDrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxilliary>
  );
};

export default Layout;
