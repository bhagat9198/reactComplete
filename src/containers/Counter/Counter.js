import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from '../../store/action';

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

        {/* <button onClick={this.props.onStoreResult} >Store Result</button> */}
        {/* passing the counter value */}
        <button onClick={() => this.props.onStoreResult(this.props.ctrl)} >Store Result</button>
        <ul>  
          {/* Uncaught TypeError: Cannot read property 'map' of undefined */}
          { this.props.storedResults.map(strResult => (
            <li 
              key={strResult.id} 
              onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}
            </li>
          ))}
        </ul>
        
      </div>
    );
  }
}

// at line 36: we get an error. that because of mutiple reducers as combined into one
// so, we will have one main state. but to avoid naming conflict, redux will add one level of nestiing. ie, each subreducer will be sub object within main object 

const mapStateToProps = state => {
  return {
    // to acces counter: global state => subobject of counter reducer property name  => counter property.hence,
    ctrl: state.ctr.counter,
    // similarly
    storedResults: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // 
    onIncrementCounter : () => dispatch({type: actionTypes.INCREMENT}),
    onDecrementCounter : () => dispatch({type: actionTypes.DECREMENT}),
    onAddCounter : () => dispatch({type: actionTypes.ADD, val: 10}),
    onSubtractCounter : () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
    
    // onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
    // passing counter value
    onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

