import React from 'react';

import classes from './Toolbar.css';

const Toolbar = props => {
  return <header className={classes.Toolbar}>
    <div>Menu</div>
    <div>Logo</div>
    <nav>
      ...
    </nav>
  </header>;
}

export default Toolbar;

// now where to place the toolbar?
  // as toolbar will be displayed on every page, we can put it on App.js but we are alraedt having Layout componenet which will be displayed on every page. thus attaching it there.