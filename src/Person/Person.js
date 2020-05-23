import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>Hello I am {props.name} and having age of {props.age} </p>
      {/* passing onClick method and linking 'switchNameHandler'  */}
      <span onClick={props.click} >{props.children}</span>
    </div>
  );
};

export default person;



// using class
// import React, {Component} from 'react';

// class Person extends Component {
//   render() {
//     return (
//       <div>
//         <p>Hello I am {this.props.name} and having age of {this.props.age} 
//           <span>{this.props.children}</span>
//         </p>
//       </div>
//     )
//   }
// }
// export default Person;