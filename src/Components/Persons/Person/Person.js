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
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  // we show context api through which we can pass the data around without passing in props. but there more elegant way.
  // in previous way, we can only use context in JSX ie we can put much logic there. for eg, if user is logged, we need to pass some http req and this we cant do in JSX.
  // but, from 16.6+ we have alternative way

  // adding a special static property named 'contextType'. 'static contextType' should be written exactly like this.
    // static : it can be accessed from outside of class without the need to instantiate an object on this class.
  // static contextType = <your value>
  // in our case value will be AuthContext object.
  static contextType = AuthContext;
  // this allow react to automatically connect this component to context which we have craeted 'AuthContext'. and after connect

  componentDidMount() {
    this.inputElementRef.current.focus();

    // after successfull connection with context, we will get one special propety 'this.context'.
    // and with help of 'this.context', we can access the context values with help of dot operator 'this.contex.<yourValue>'
    console.log(this.context.authenticated);
  }
  
  render() {
    console.log('[Person.js] render...');
    return (
      <Auxilliary>
        {/* <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated!!!</p> : <p>Please LogIn</p>}
        </AuthContext.Consumer> */}
        
        {/* doing with help of 'this.context' */}
        {this.context.authenticated ? <p>Authenticated!!!</p> : <p>Please LogIn</p>}

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