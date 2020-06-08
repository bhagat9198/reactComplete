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





// here, we are having number of user props which holds particular data type like string, number, etc. and 'children' is speacial type of prop.
// if lots of ppl are working on our code and it can happen they pass wrong data type. it will be good if we can specify what type of data particular prop uses.
// to do this, we will 3rd party tool
  // npm install --save prop-types
// it can be used with functional and class based components.

import React, { Component} from 'react';
import Auxilliary from '../../../hoc/Auxilliary'
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

// requiring 3rs party
import PropTypes from 'prop-types';

class Person extends Component {
  
  render() {
    console.log('[Person.js] render...');
    // console.log(this.props);

    return (
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

// using PropTypes
// <componentName>.propTypes = {} : 'propTypes' is inbuild special property which we can add to any Js componenet object and react will watch out for in developement mode and give us the warning if wrong datatype of data is passed in props. 
Person.propTypes = {
  // passing key: value pair where 'key' is prop name and 'value' will be datatype of prop
  click : PropTypes.func,
  name : PropTypes.string,
  age : PropTypes.number,
  changed : PropTypes.func
  // PropTypes can be advaced also where we cav define which functio acception how many argumenst and of what type.
};

export default withClass(Person, classes.Person);