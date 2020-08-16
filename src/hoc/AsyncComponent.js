// this component will help me load another component asynchronously ie, only load the component when its needed.
import React, { Component } from 'react';

// importComponent: it will be a function
// thus, taking function as agrument.
const AsyncComponent = (importComponent) => {
  // returning the class based component
  return class extends Component {
    // setting state
    state = {
      component: null
      // this component will be set to dynamically loaded component ie 'importComponent' 
    };

    // once this hoc AsyncComponent componenet will be mounted
    componentDidMount() {
      // atlast 'importComponent' is nothing but the function refference.
      // executing the function which will return prommise
        // how?
        // because, i will be setting up in this way so that i get a promise at the end
      importComponent()
      .then(cmp => {
        // cmp it will have a property 'default' which will be the component we loaded dynamically.
        // hence, updating teh state
        this.setState({component: cmp.default})
        // the way we are doing this because of 'create-react-app' setup
        // it is also heavly depeneded upon the type of 'importComponent' function we will reffer to.
        
        // this.setState({component: cmp.default})
        // by this, we will be loading the acutual component we want to use
      })
    }

    render() {
      const  C = this.state.component;

      // if C is set, passing the component with all its porps else passing null 
      return C ? <C {...this.props} /> : null;
    }
  }
}

export default AsyncComponent;