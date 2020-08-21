import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
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
          label="Add 10"
          clicked={this.props.onAddCounter}
        />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={this.props.onStoreResult} >Store Result</button>
        <ul>  
          { this.props.storedResults.map(strResult => (
            <li 
              key={strResult.id} 
              // this onclick 'onDeleteResult' function should be called with arguemnt id passing the key of element. hence changing the way, this function is called. 
              // onClick={this.props.onDeleteResult}>{strResult.value}
              onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}
            </li>
          ))}
        </ul>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctrl: state.counter,
    storedResults: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter : () => dispatch({type: 'DECREMENT'}),
    onAddCounter : () => dispatch({type: 'ADD', val: 10}),
    onSubtractCounter : () => dispatch({type: 'SUBTRACT', val: 15}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    // passing the key with property name 'resultElId'
    // to get the key of clicked list element, we will get key value as arg
    onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

