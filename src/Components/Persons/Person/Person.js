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
// importing context
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  
  render() {
    console.log('[Person.js] render...');
    // now, we want to consume the values of the context and hence using consumer comp.
    return (
      <Auxilliary>
        <AuthContext.Consumer>
          {/* but, consumer comp, doesnt take JSX code as child ie content between '{}'. Consumer comp, takes a function as a child between '{}' */}
          {/* hence passing annomous function and function will pass JSX. and this function which will be executed by context api will have a arg (you can name the arg what you want) which contain context object  */}
          {(context) => context.authenticated ? <p>Authenticated!!!</p> : <p>Please LogIn</p>}
        </AuthContext.Consumer>

        <p onClick={this.props.click}>
          Hello I am {this.props.name} and having age of {this.props.age} 
        </p>
        <p>{this.props.children}</p>
        <input 
          key="i3"
          ref={this.inputElementRef}
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