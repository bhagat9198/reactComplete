// creating a seprate componen as we will give its own stlying 

import React from 'react';

const DrawerToggle = props => {
  return ( 
    <div onClick={props.clicked} >MENU</div>
  );
};

export default DrawerToggle;