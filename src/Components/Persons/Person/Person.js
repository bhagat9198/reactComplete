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
// import Auxilliary from '../../../hoc/Auxilliary'
// import classes from './Person.css';

// class Person extends Component {

//   render() {
//    console.log('[Person.js] render...');

//     // we know about 'Auxilliary' component but from React 16.2+, we have inbuild Auxilliary componenent.
//     return (
//       <React.Fragment>
//         <p onClick={this.props.click}>
//           Hello I am {this.props.name} and having age of {this.props.age} 
//         </p>
//         <p>{this.props.children}</p>
//         <input 
//           key="i3"
//           type="text" 
//           onChange={this.props.changed} 
//           value={this.props.name} 
//         />
//       </React.Fragment>
//     );
//   }
// };



// OR (same method, different way)


// instead of writing 'React.Fragment' we can import the Fragment and no need to use dot notation.
import React, { Component, Fragment } from 'react';
import Auxilliary from '../../../hoc/Auxilliary'
import classes from './Person.css';

class Person extends Component {

  render() {
    console.log('[Person.js] render...');

    return (
      <Fragment>
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
      </Fragment>
    );
  }
};

export default Person;