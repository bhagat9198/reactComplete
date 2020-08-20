import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctrl} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          // label="Add 5"
          label="Add 10"
          clicked={this.props.onAddCounter}
        />
        <CounterControl
          // label="Subtract 5"
          // changing the label to 15
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctrl: state.counter
  }
}



const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter : () => dispatch({type: 'DECREMENT'}),
    // along with the type, passing the payload. payload can be in another object or simple passing payload values within main function 
    onAddCounter : () => dispatch({type: 'ADD', val: 10}),
    // 
    onSubtractCounter : () => dispatch({type: 'SUBTRACT', val: 15})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

