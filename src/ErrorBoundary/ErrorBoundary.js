// this concept is known as ErrorBoundary, but can name it whatever u want.

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  // as we want to set the state, thats why using the class
  state = {
    // initially seting 
    hasError: false,
    errorMessage: ''
  }

  // adding new method
  // error: error message, info: additional info 
  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  }

  render() {
    // hasError can be true or false, thus using the if condition
    if(this.state.hasError) {
      return (
        // only returning when there is error
        <h1>{this.state.errorMessage}</h1>
      );
    } else {
      // whatever is passed within 'ErrorBoundary' component with will regarded as 'props.children'
      return this.props.children;
    }
    
  }
}

// exporting the class
export default ErrorBoundary;
