// import React from 'react';
// import classes from './Person.css';

// const person = (props) => {
//   console.log('[Person.js] render...');
  
//   return (
//     <div className={classes.Person} >
//       <p onClick={props.click}>Hello I am {props.name} and having age of {props.age} </p>
//       <p >{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

// export default person;






// import React, { Component } from 'react';
// import classes from './Person.css';

// class Person extends Component {

//   render() {
//   console.log('[Person.js] render...');
  
//   return (
//     // // as we know we have to wrap whole our JSX into one single html element, and can have as much child as possible but we cant have multiple html elememnts.
//     // // but, this not true for all the cases: goto Persons.js
//     // <div className={classes.Person} >
//     //   <p onClick={this.props.click}>
//     //     Hello I am {this.props.name} and having age of {this.props.age} 
//     //   </p>
//     //   <p >{this.props.children}</p>
//     //   <input type="text" onChange={this.props.changed} value={this.props.name} />
//     // </div>



//     // removing the outermost div for now and wrapping them in an array which can hold the adjusr elements.
//     // as it is an array, elements are seprated by comma. each html tage will be seprated by comma.
//       // as at last JSX is syntatical sugar which is converted in pure JS
//     // as we have converted into array elements, 'key' is req by each element. hence, puting unique key .
//     [ 
//       // 1st element
//       <p key="i1" onClick={this.props.click}>
//         Hello I am {this.props.name} and having age of {this.props.age} 
//       </p>,
//       // 2nd element
//       <p key="i2">{this.props.children}</p>,
//       // 3rd element
//       <input 
//         key="i3"
//         type="text" 
//         onChange={this.props.changed} 
//         value={this.props.name} 
//       />
//     ]
//     // thus our app works perfectly fine except our class style is misisng.
//   );
//   }
// };




// 2nd Method:
// another way as array can be bit tedious(seprating and key). doing easier way
  // make warpping componenet that does not render any actual html code but its simply there to fulfull react requirement of having wrapping component.
  // to do this, creating a new folder 'hoc'(higher order functions :  components that wrap another components) and within new component 'Auxilliary.js'
  // Auxilliary : providing supplementary or additional help and support.

import React, { Component } from 'react';

// importing 'Auxilliary.js'
import Auxilliary from '../../../hoc/Auxilliary'
import classes from './Person.css';

class Person extends Component {

  render() {
  console.log('[Person.js] render...');

  return (
    // and now we will wrap all out code in 'Auxilliary' component.
    // thus, props.children in Auxilliary componenet will reffer to all the code which is within auxillairy tag.
    // and then 'Auxillary' simply output that conetent.
    
    // having the wrapper around elements is pure technical one from JS point of view that only one expesstion must be returned and that what wrapper is for.
    // we must keep in mind all these JSX elemnts are translated in pure JS as React.CreateElement().
    <Auxilliary>
      <p onClick={this.props.click}>
        Hello I am {this.props.name} and having age of {this.props.age} 
      </p>
      <p>{this.props.children}</p>
      <input 
        key="i3"
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} 
      />
    </Auxilliary>
    
  );
  }
};


export default Person;
    
