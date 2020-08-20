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
          // clicked={() => this.counterChangedHandler("inc")}
          // using the 'onIncrementCounter' property to dispatch action. directly passing props property name
          clicked={this.props.onIncrementCounter}
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

const mapStateToProps = state => {
  return {
    ctrl: state.counter
  }
}

// we have connected to store, now we should able to dispatch actions from our componenents and give it to reducer
// in standalone redux: "store.dispatch({type: 'INC_COUNTER'});" we used 'dispatched' keyword on the 'store'. 
// here, we have access to 'store' (not directly) through 'connect' method

// 1st configration: maganing state
// passing 2nd configration : dispatching actions

// mapDispatchToProps: we will say which kind of actions so we want to dispatch from this container
  // it will be function which will receive the dispatch function which we can execute as a argument
  // dispatch: calling 'store.dispatch' behiend the sceans
const mapDispatchToProps = dispatch => {
  // returing js object
  return {
    // // defining prop names which will hold teh refference to the function which shlould eventually get executed to dispatch an action
    // // value of 'onIncrementCounter' will be anonmous function  
    // onIncrementCounter: () => dispatch()
    // // "() => dispatch()" will available through 'onIncrementCounter' prop name. hence whenever this property is executed as a function then "dispatch()" will be executed. and to "dispatch()" we can pass the arg.
      // agr will be object and will contain 'type' property

    onIncrementCounter : () => dispatch({type: 'INCREMENT'})
  }

}

// export default connect(mapStateToProps)(Counter);
// passing 2nd property also
export default connect(mapStateToProps, mapDispatchToProps)(Counter);



// sidenote: 
  // if we dont have any actions, then we can leave the 2nd arg argument.
  // eg: export default connect(mapStateToProps)(Counter);
  // but if we have action ie 2nd property and not the first one(setting state) then making passing arg as null
  // eg: export default connect(null, mapDispatchToProps)(Counter);
