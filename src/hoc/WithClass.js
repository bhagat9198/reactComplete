// 1st mmethod
// import React from 'react';
// const WithClass = props => (
//   <div className={props.classes}> 
//     {props.children}
//   </div>
// )
// export default WithClass;


// 2nd method: 
  // in this we will not return the functional component.
  // we will use regular(normal) JS which will 2 args (but it can take as many you want. according our need we will take 2 args)
    // 1st arg: Component and hence arg name will be capatilized
    // 2arg: name of a class. 'className' is just arg, its not a keyword as we function, not JSX.
import React from 'react';

// WithClass => withClass
const withClass = (WrappedComponent, className) => {
  // in function body, we will return functional component , ie JSX
  return props => (
    // className on LHS : keyword
    //  className on RHS :  arg passed by function
    <div className={className}>
      <WrappedComponent></WrappedComponent>
    </div>
  )
}

// now, its is just a function which is returning functional component but itself is is not a functional component. hence changing the way we are exporting and file name.
// export default WithClass;

// only components names are captailized and its not component. thus lowercase name
export default withClass;

