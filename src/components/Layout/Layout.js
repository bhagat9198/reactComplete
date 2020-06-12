// as we are rendering JSX
import React from 'react';
// 
import Auxilliary from '../../hoc/Auxilliary';

const Layout = (props) => {
  // it should render all the JSX in sepecific formate, rn instaed of the roginal content, just rendering the name of the compoents which should be there.

  // as we have adjucent elements, making use of Auxilliary comp.
  return (
    <Auxilliary>
      <div>ToolBar, SideBar, BackDrop</div>
      <main>
        {/* here, we want to output the component which we warp in this layout */}
        {props.children}
      </main>
    </Auxilliary>
  );
};

export default Layout;
// now we can import this Layoout directly in index.js or in App. Both places it will work the same. 
// but we will import it in App 