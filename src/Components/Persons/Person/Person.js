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





import React, { Component} from 'react';
import Auxilliary from '../../../hoc/Auxilliary'
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
  // lets say we want to foucus on last input element once the component has been rendered.

  // 3 way
  constructor(props) {
    super(props)
    // createRef : its a method offred on react object where we are importing and storing in input element.
      // it can any object which react gives 
    this.inputElementRef = React.createRef();
  }



  componentDidMount() {
    // // normal old JS way
    // document.querySelector('input').focus();
    // // this way is not preffred as it doesnt care if we are using react or not. once the component is rendered, it will check the DOM and do whatever task req.
  
    // // thus, react has easier to to select elements, a concept called 'ref' for 'references'


    // // 2method
    // this.inputElement.focus();
    // // hence, this can only work in class based components.


    // 3method: from 16.3+ we have one more way
      // have to use current to access to current reference 
    this.inputElementRef.current.focus();
  }
  
  render() {
    console.log('[Person.js] render...');
    return (
      <Auxilliary>
        <p onClick={this.props.click}>
          Hello I am {this.props.name} and having age of {this.props.age} 
        </p>
        <p>{this.props.children}</p>
        <input 
          key="i3"
          // adding 'ref' special keyword, just like 'key' which will be understood and dected by react.
          // there are 3 ways to setup ref
          // 1way: supported in order versions
            // passing anamous function which will get the arg pointing to that element. 
            // we can name the arg what we want.
          // ref= {(inputEl) => inputEl.focus()}
          // as when component is rendered completely, our current element will be last element. thus, last input element will be focused. 


          // 2nd method :  lets say we dont want to use that element here but somewhere else in our application
            // creating a new property in class (global to class) which will hold the 'inputEl' ie current element.
            // new property name can be anything, in our case its 'inputElement'
            // 'componentDidMount' will run once all this set and there we can add foucus to this element
          // ref={(inputEl) => {this.inputElement = inputEl}} 


          // 3rd method:
          ref={this.inputElementRef}
          // inputElementRef : it holds an access to this ref object. hence react will make the connection and this element will be reffered to inputElementRef

          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
        />
      </Auxilliary>
    );
  }
};

Person.propTypes = {
  click : PropTypes.func,
  name : PropTypes.string,
  age : PropTypes.number,
  changed : PropTypes.func
};

export default withClass(Person, classes.Person);