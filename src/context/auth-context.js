// to come out of the props chain, we will make use of 'context'
// creating context object 

import React from 'react';

// createContext : it allows us to inilize our context with a default value. 
  // Context is just globally(user decide where it should be avaialable) available JS object. 
  // its a JS obj taht can be passed between React components without using props
  // its not nessary it has to be an object. it can be array, string or number, etc as a context value.

const authContext = React.createContext({
  authenticated: false,
  login : () => {}
  // these key:value are not nessary req and dont care much about the values which we put here. its just for editor help(aoto-completation) 
});

export default authContext;