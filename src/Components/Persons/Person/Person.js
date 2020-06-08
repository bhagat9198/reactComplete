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


// this component is useing 'Person' style. adding the style with 'withClass' hoc


// import React, { Component, Fragment } from 'react';
import React, { Component} from 'react';
import Auxilliary from '../../../hoc/Auxilliary'
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  
  
  render() {
    console.log('[Person.js] render...');
    console.log(this.props);
    return (
      // wraping it with Auxilliary comp.
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

// wrapping this component with 'withClass' hoc
export default withClass(Person, classes.Person);

// what exactly is happening?
  // we are wrapping the comp with hoc and then exporting it. Hence, which ever file will be importing this component will be importing 'withClass' and its function return JSX will be imported to that file. 
