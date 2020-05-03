import React from 'react';

// it accept only one agrument
const person = (props) => {
  // as 'App' is passing agruments as key value pair. keys are 'name' and 'age'
  return (
    <div>
      <p>Hello I am {props.name} and having age of {props.age} </p>
      {/* if we want to display some extra html, that can be extracted with help of 'children' keyword.*/}
      <span>{props.children}</span>
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