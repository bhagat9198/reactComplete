// rn, we are managing the state internally. now we will manage the state with redux-store. but the pattern of componenet will not changes. state is something which will be given by redux.
// now, we need to add subscriptions. but this will be done different (not as we did in redux-basics)

import React, { Component } from "react";
// 1.
// connect: its a function, a HOC wich will be used on export
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  // state managed redux is not recieved as state here in componenet because this state is the thing which is changing internaly within this componenet.
  state = {
    counter: 0,
  };
  // thus, no redux will storing the state, not the componenet. and props are changed internally and hence mapping redux state with props. 
  // hence we get the name 'mapStateToProps' 

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
        {/* outputing the store value */}
        <CounterOutput value={this.props.ctrl} />
        <CounterControl
          label="Increment"
          clicked={() => this.counterChangedHandler("inc")}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler("sub", 5)}
        />
      </div>
    );
  }
}

// 3.
// to connect function, 2agrs are passed
// 1. which part of appliaction we need. eg: in larger appliaction we will have lods of state and  specific container, doesnt needs all of the states, only few which that container is mamanging
// 2. which actions we want to dispatch as in bigger appliactions, we can have lots of actions but giver container is will dispatching few actions only.

// starting with state
// mapStateToProps: storing instructions how the state managed by redux should be mapped to props.

// it stors the function which expects the state stored in redux as the input(argument) and returns the js object which is a map of props names and slices of state stored in redux
// 'state' as argument : it will be given by react-redux. so it will go to reducer.js file where we have have defined that state and extract it. 
  // there we have initialSate which is having property 'counter'
const mapStateToProps = state => {
  return {
    // defining our own props names
    ctrl: state.counter

  }
}
// this function will be executed by 'react-redux' package because we will pass it to. its our way of configuring which king of information we need.




// 2.
// export default Counter;

// connect: its a function which returs the function  and this returned function takes a component as argument. so connect is not really a HOC, its a function which return the HOC.
// thus, 'connect' itself can be called as function and since it returns the function. we then execute the result of connect of this function execution.

export default connect(mapStateToProps)(Counter);
