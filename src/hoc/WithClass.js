import React from 'react';

// this, now Person component got it style back but itts missing its 'name' and 'age'
  // what it means?
    // it means taht Person compoent is missing all its props.
  // and why its missing?
    // according to our setup, Persons compoent is importing is Person Component. Thus, directly it cant import person comp. , it will import the return result of this hoc.
    // thus, whichever proprs have been passed by Persons will come in this hoc props. 
    // and from here we have to pass props to Person comp.

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      {/* we can hardcode the props here as */}
      {/* <WrappedComponent name="max!!!"></WrappedComponent> */}
      {/* but, it we want it to be dynamic */}

      {/* to pass the props to warpped comp. we cant do like this */}
      {/* <WrappedComponent props = {props} /> */}
      {/* this is bec, react automatically takes all the attributes we add to jsx and combine them into props object. So, now props will not replace the props object but add as a single property in the props passed to warpped comp. */}

      {/* thus, we will use spread operator */}
      <WrappedComponent {...props} />
      {/* the props we are getting in function agr is the JS obj and spraed operator will pulls out all the properties which is inside the props object and distributes as new key-value pair on the warraped comp. */}

    </div>
  )
}

export default withClass;



